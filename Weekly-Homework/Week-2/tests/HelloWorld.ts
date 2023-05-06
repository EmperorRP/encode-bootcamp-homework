import {expect} from "chai";
import {ethers} from "hardhat";
import { HelloWorld } from "../typechain-types";

  
describe("HelloWorld", () =>{
    let helloWorldContract: HelloWorld;
    beforeEach( async () => {
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        helloWorldContract = await helloWorldFactory.deploy();
        await helloWorldContract.deployed();
    })

    it("Should give a Hello World", async () => {
        const helloWorldText = await helloWorldContract.helloWorld();
        expect(helloWorldText).to.equal("Hello World");
    });

    it("Should set owner to deployer account", async () => {
        const owner = await helloWorldContract.owner();
        const accounts = await ethers.getSigners();
        expect(owner).to.eq(accounts[0].address);
    });
});


