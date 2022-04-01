/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");

require("dotenv").config();

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || "";
const RINKEBY_RPC_URL = "https://eth-rinkeby.alchemyapi.io/v2/WfGZwgyJEV5GK2M7IPOtkHpRR8_ctvCT";
const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || "";
const MNEMONIC = process.env.MNEMONIC || "";
const ETHERSCAN_API_KEY = "E82UVVN2ATSQFXKNWZ1JXGE5XX6PSI8IMY";
// optional
const PRIVATE_KEY = "353e42d2e63c20db1e916f3b49d0bd5f65d7bd6bf06e41399f78fd2e5c9177d1";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {

    },
    localhost: {},
    kovan: {
      url: KOVAN_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      mnemonic: "I am Amence",
      saveDeployments: true,
    },
    ganache: {
      url: "http://localhost:8545",
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
    polygon: {
      url: "https://rpc-mainnet.maticvigil.com/",
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.7.0",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 100000,
  },
};
