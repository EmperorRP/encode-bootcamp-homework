import { ethers } from "hardhat";
import { Ballot__factory } from "../typechain-types";

import * as dotenv from 'dotenv';
dotenv.config();

const ADDRESS = "0x04b24656E4B114e4eF83f40a1161d1804e684D89";

async function main() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`Using wallet address of ${wallet.address} `);
    const provider = ethers.getDefaultProvider("goerli");
    const lastBlock = await provider.getBlock("latest");
    console.log(`The last block is ${lastBlock.number} WEI`)
    return;
    const signer = wallet;
    const etherSigners = await ethers.getSigners();
    // const signer = etherSigners[0];
    const balance = await signer.getBalance();
    console.log(`Balance is ${balance} WEI`);
    const PROPOSALS = process.argv.slice(2);
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  PROPOSALS.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });
  const ballotFactory = new Ballot__factory(signer);
  const ballotContract = await ballotFactory.deploy(
    PROPOSALS.map(ethers.utils.formatBytes32String)
  );
  const deployTx = await ballotContract.deployTransaction.wait();
//   console.log(deployTx);
  console.log(`The ballot contract was deployed at ${ballotContract.address} at block ${deployTx.blockNumber}`);
  const chairperson = await ballotContract.chairperson();
  console.log(`The chairperson is ${chairperson}`);
  console.log(`Giving right to vote to address ${ADDRESS}`);
  const giveRightToVoteTx = await ballotContract.giveRightToVote(ADDRESS);
  const giveRightToVoteTxReceipt = await giveRightToVoteTx.wait()
  console.log(`The transaction hash is ${giveRightToVoteTxReceipt.transactionHash} at the block ${giveRightToVoteTxReceipt.blockNumber}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});