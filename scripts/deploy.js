require("@openzeppelin/hardhat-upgrades");

const hre = require("hardhat");
const { ethers, upgrades } = hre;

upgrades.silenceWarnings();

const fs = require("fs");
var util = require("util");
var log_stdout = process.stdout;

var dateNow = new Date();
var timeNow = (dateNow.getHours() > 12 ? dateNow.getHours() - 12 : dateNow.getHours()) + "-" + dateNow.getMinutes() + (dateNow.getHours() > 12 ? " PM" : " AM");
var logPath = dateNow.toDateString() + "_" + timeNow + ".log";
var log_file = fs.createWriteStream("LOGS_" + logPath, { flags: "w" });

console.log = function (d) {
	log_file.write(util.format(d) + "\n");
	log_stdout.write(util.format(d) + "\n");
};

async function main() {

    const Example = await ethers.getContractFactory("Example");

    console.log("Got contract factories... DONE!");

    const ExampleInstance = await upgrades.deployProxy(Example, {
		initializer: "initialize",
		unsafeAllow: ["delegatecall"],
	});

    console.log("Deploying Example...");

	await ExampleInstance.waitForDeployment();

    const ExampleAddress = ExampleInstance.address;
    console.log("Example deployed to: ", ExampleAddress);
    console.log(" ");
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
	process.exit(1);
});