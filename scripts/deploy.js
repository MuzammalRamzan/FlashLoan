const { ethers, upgrades } = require('hardhat');

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account:', deployer.address);

	const FANATICO8 = await ethers.getContractFactory('FANATICO8');
	const fanatico8 = await FANATICO8.deploy('FANATICO8', 'FANATICO8');

	await fanatico8.deployed();

	console.log('Token deployed to:', fanatico8.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
