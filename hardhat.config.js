require("@nomiclabs/hardhat-waffle");

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

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.9",
  networks: {
		mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/-HhiDaFXMF6QzvhojwnIypewCOFgs7gQ",
      accounts: ["b22ce93ad43a46da34d80741f2346076679722572ac9b642d40c319624603f8e"],
		}
  }
};

// https://polygon-mumbai.g.alchemy.com/v2/-HhiDaFXMF6QzvhojwnIypewCOFgs7gQ
