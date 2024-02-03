require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-ethers");

require("dotenv").config();
dotenv = require("dotenv");
dotenv.config();

const accounts = [process.env.PRIVATE_KEY];

module.exports = {
	solidity: {
		compilers: [
			{
				version: "0.8.2",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000,
					},
				},
			},
			{
				version: "0.8.7",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000,
					},
				},
			},
			{
				version: "0.8.9",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000000,
					},
				},
			},
			{
				version: "0.8.20",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000000,
					},
				},
			},
			{
				version: "0.8.13",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000000,
					},
				},
			},
			{
				version: "0.7.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000000,
					},
				},
			},
			{
				version: "0.6.12",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000,
					},
				},
			},
			{
				version: "0.6.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000,
					},
				},
			},
		],
	},

	networks: {
		hardhat: {
			forking: {
				url: `https://rpc.pulsechain.com`,
				chainId: 369,
				blockNumber: 19437037,
				enabled: true,
				gasMultiplier: 2,
			},
		},

		local: {
			url: "http://127.0.0.1:8545",
			forking: {
				url: `https://bsc-mainnet.nodereal.io/v1/f82aa3b8072a46ccadf3024a96f0cff4`,
				chainId: 56,
				blockNumber: 29012996,
				gasMultiplier: 2,
			},
		},

		arbitrum: {
			url: `https://endpoints.omniatech.io/v1/arbitrum/one/public`,
			accounts: accounts
		},

		avalanche: {
			url: `https://avalanche-c-chain.publicnode.com`,
			accounts: accounts
		},

		base: {
			url: `https://base.llamarpc.com`,
			accounts: accounts
		},

		cronos: {
			url: `https://1rpc.io/cro`,
			accounts: accounts
		},

		ethereum: {
			url: `https://eth.merkle.io`,
			accounts: accounts
		},

		ethclassic: {
			url: `https://etc.rivet.link`,
			accounts: accounts
		},

		fantom: {
			url: `https://fantom.publicnode.com`,
			accounts: accounts
		},

		gnosis: {
			url: `https://gnosis-pokt.nodies.app`,
			accounts: accounts
		},

		kava: {
			url: `https://kava-evm.publicnode.com`,
			accounts: accounts
		},

		manta: {
			url: `https://1rpc.io/manta`,
			accounts: accounts
		},

		optimism: {
			url: `https://optimism.llamarpc.com`,
			accounts: accounts
		},

		polygon: {
			url: `https://polygon.llamarpc.com`,
			accounts: accounts
		},

		pulsechain: {
			url: `https://rpc-pulsechain.g4mm4.io`,
			accounts: accounts,
		}
	}
};
