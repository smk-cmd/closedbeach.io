const { network } = require("hardhat");
const {
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts()

  const args = []
  const basicNft = await deplpy("BasicNft", {
    from: deployer, 
    args: args, 
    logs: true,
    waitConfirmations: network.config.VERIFICATION_BLOCK_CONFIRMATIONS || 1, 
  })


  if(!developmentChains.includes(network.name) && ProcessingInstruction.env.ETHERSCAN_API_KEY){
    log("Verifying...") 
    await verify(basicNft.address, args)


  }

  module.exports.tags = ["all", "basicNft"]


  }

