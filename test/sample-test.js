const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mint", function () {
  it("Should return the new greeting once it's changed", async function () {
    const BeachSumos = await ethers.getContractFactory("Beachsumos");
    const Beachsumos = await BeachSumos.deploy();
    await Beachsumos.deployed();

    const buyer = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
