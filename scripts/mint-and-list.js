const { ethers, network} = require("hardhat")
const { moveBlocks } = require("../utils/move-blocks")

const PRICE = ethers.utils.parseEther("0.1")

async function mintAndList(){
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const basicNft = await ethers.getContract("BasicNft")
    console.log("Minting...")
    const mintTX = await basicNft.mintNft()
    const mintTXReceipt = await mintTX.wait(1)
    const tokenID = mintTXReceipt.events[0].args.tokenId
    console.log("Approving Nft...")
    const approvalTx = await basicNft.approve(nftMarketplace.address, tokenID)
    await approvalTx.wait(1)
    console.log("listing NFT...")
    const tx = await nftMarketplace.listItem(basicNft.address, tokenID, PRICE)
    await tx.wait(1)
    console.log("Listed!")
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })