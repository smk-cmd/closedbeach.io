// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

error NftMarketplace_PriceMustBeAboveZero();
error NftMarketplace_NotApprovedForMarketplace();

contract NftMarketplace {
    
    struct Listing {
        unit256 price;
        address seller;
    }
    // NFT Contract address -> NFT TokenID -> Listing
    //mapping(address => mapping(unit256 => Listing))

    function listItem(address nftAddress, uint256 tokenId, unit256 price)
     external {
        if (price <= 0){
            revert NftMarketPlace_PriceMustBeAboveZero();
        }
        //1. Send the NFT to the contract. Transfer -> Contract "hold" the NFT
        //2. Owners can still hold their NFT, and give the marketplace approval
        // to sell the NFT for them.
        IERC721 nft = IERC721(nftAddress);
        if (nft.getApproved(tokenID) != address(this)){
            revert NftMarketplace_NotApprovedForMarketplace();
        }
        // array? mapping?
        // mapping
     }
}