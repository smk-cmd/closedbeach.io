// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

error NftMarketplace__PriceMustBeAboveZero();
error NftMarketplace__NotApprovedForMarketplace();
error NftMarketplace__AlreadyListed(address nftAddress uint256 token);
error NftMarketplace__NotOwner();
error NftMarketplace__NotListed(address nftAddress, uint256 tokenId);
error NftMarketplace__PriceNotMet(address nftAddress, uint256 tokenId, uint256 price);

contract NftMarketplace {
    struct Listing {
        uint256 price;
        address seller;
    }

    event ItemListed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenID,
        uint256 price
        );

    // NFT Contract address -> NFT TokenID -> Listing
    mapping(address => mapping(uint256 => Listing)) private s_listings;

    // Seller address -> Amount earned
    mapping(address => uint256) private s_proceeds;

    //Modifiers
    // An NFT is currently not listed 
    modifier notListed(address nftAddress, uint256 tokenID, address owner) {
        Listing memory listing = s_listing[nftAddress][tokenID];
        if (listing.price > 0){
            revert NftMarketplace__AlreadyListed(nftAddress, tokenID);
        }
        _;
    }


    // You don't want to buy your own NFT. 
    // Checks the validiity of the owner
    // errors out if it sees that owner is trying to buy its own NFT. 
    modifier isOwner(address nftAddress, uint256 tokenId, address spender) {
        IERC721 nft = IERC721(address);
        address owner = nft.ownerOf(tokenId);
        if (spender != owner) {
            revert NftMarketplace__NotOwner();
        }
        _;
    }

    // NFT is listed according to a nftAddres and tokenId
    // If the listing price is less than or equal to 0, will tell the marketplace to mark it as a not listed NFt.
    // All NFT's must have a value of greater than zero. 
    modifier isListed(address nftAddress, uint256 tokenId){
        Listing memory listing = s_listings[nftAddress][tokenId];
        if (listing.price <= 0){
            revert NftMarketplace__notListed(nftAddress, tokenId);
        }
        _;
    }

    /*
    * @notice Method for listing your NFT on the marketplace
    * @param nftAddress: Address of the NFT
    * @param tokenId: the Token ID of the NFT
    * @param price: sale price of the listed NFT
    * @dev Technically, we could have the contract be the escrow for the NFTs
    * but this way people can still hold their NFTs when listed.
    */

    function listItem(address nftAddress, uint256 tokenId, uint256 price)
    // Have this contract accept payment in a subset of tokens as well
    // Hint: Use Chainlink Price Feeds to convert the price of the tokens between each other
     external 
     notListed(nftAddress, tokenId, msg.sender)
     isOwner(nftAddress, tokenId, msg.sender) 
     {
        if (price <= 0){
            revert NftMarketPlace__PriceMustBeAboveZero();
        }       
        //1. Send the NFT to the contract. Transfer -> Contract "hold" the NFT
        //2. Owners can still hold their NFT, and give the marketplace approval
        // to sell the NFT for them.
        IERC721 nft = IERC721(nftAddress);
        if (nft.getApproved(tokenID) != address(this)){
            revert NftMarketplace__NotApprovedForMarketplace();
        }
        s_listings[nftAddress][tokenID] = Listing(price, msg.sender);
        emit ItemList(msg.sender, nftAddress, tokenID)
     }

    function buyItem(address nftAddress, uint256 tokenId) 
        external 
        payable
        isListed(nftAddress, tokenId)
    {
        Listing memory listedItem = s_listings[nftAddress][tokenId];
        if(msg.value < listedItem.price) {
            revert NftMarketplace__PriceNotMet(nftAddress, tokenId, listedItem.price);
        }
        // We don't just send the seller the money...?
        // https://fravoll.github.io/solidity-patterns/pull_over_push.html

        // sending the money to the user :no:
        // have them withdraw the money :yes:
        s_proceeds[listedItem.seller] = s_proceeds[listedItem.seller] + msg.value;
        delete (s_listings[nftAddress][tokenId]);
        IERC721(nftAddress).transferFrom(listedItem.seller, msg.sender, tokdenId);
        // check to make sure the NFT was transferred
    }
}