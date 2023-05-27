require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
	defaultNetwork: 'bsctestnet',
	networks: {
		bsctestnet: {
			url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
			chainId: 97,
			accounts: [process.env.PRIVATE_KEY],
			gas: 'auto',
			gasPrice: 20000000000, // Adjust the gasPrice as needed
		},
	},
	solidity: {
		version: '0.8.18',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
};
