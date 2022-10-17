require("dotenv").config();
require("hardhat-deploy");
require("hardhat-contract-sizer");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
const POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  // Allows for React to access info about smart contract
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
  },
  localhost: {
      chainId: 31337,
  },
  goerli: {
      url: GOERLI_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      //   accounts: {
      //     mnemonic: MNEMONIC,
      //   },
      saveDeployments: true,
      chainId: 5,
      blockConfirmations: 6,
  },
  mainnet: {
    url: MAINNET_RPC_URL,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   accounts: {
    //     mnemonic: MNEMONIC,
    //   },
    saveDeployments: true,
    chainId: 1,
    blockConfirmations: 6,
  },
  polygon: {
    url: POLYGON_MAINNET_RPC_URL,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    saveDeployments: true,
    chainId: 137,
    blockConfirmations: 6,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
