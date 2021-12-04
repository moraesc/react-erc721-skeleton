const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    const Token = await hre.ethers.getContractFactory('Greeter');
    const greeter = await Token.deploy();

    await greeter.deployed();
};

const runMain = async () => {
try {
    await main();
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}
};

runMain();