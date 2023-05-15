import { ethers } from "hardhat";


async function main() {
    const [deployer, acc1, acc2] = await ethers.getSigners();
    const tokenContractFactory = await ethers.getContractFactory("MyERC20Token");
    const tokenContract = await tokenContractFactory.deploy();
    const tokenContractDeployTxReceipt = await tokenContract.deployTransaction.wait();
    console.log(`Token contract deployed at the address ${tokenContract.address} at block ${tokenContractDeployTxReceipt.blockNumber}`)
    const minterRoleTag = await tokenContract.MINTER_ROLE();
    console.log(`The minter role tag is: ${minterRoleTag}`);
    const code = await tokenContract.MINTER_ROLE();
    const roleTx = await tokenContract.grantRole(code, acc2.address);
    await roleTx.wait();
    const mintTx = await tokenContract.connect(acc2).mint(acc1.address, 2);
    const mintTxReceipt = await mintTx.wait();
    console.log(`The mint transaction was completed with the hash ${mintTxReceipt.transactionHash}`);
    
}

main().catch((err)=>{
    console.error(err);
    process.exitCode = 1;
});