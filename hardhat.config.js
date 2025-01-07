require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      forking: {
        url: process.env.RPC,
        blockNumber: parseInt(process.env.BLOCK, 10),
      },
      chainId: parseInt(process.env.CHAIN_ID, 10)
    },
  },
};
