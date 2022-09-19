const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mint", function () {
  it("Should return the new greeting once it's changed", async function () {
    const BeachSumos = await ethers.getContractFactory("BeachSumos");
    const Beachsumos = await BeachSumos.deploy();
    await Beachsumos.deployed();

    const buyer = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

    const metadataURI = 'cid/test.png'

    let balance = await Beachsumos.balanceOf(buyer);
    expect(balance).to.equal(0);

    const TokenMint =await Beachsumos.payToMint(buyer,metadataURI,{
      value: ethers.utils.parseEther('0.05')
    });

  });
});
