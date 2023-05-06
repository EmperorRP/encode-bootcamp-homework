import { expect } from "chai";
import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

describe("Ballot", function () {
  let ballotContract: Ballot;

  beforeEach(async function () {
    const ballotFactory = await ethers.getContractFactory("Ballot");
    ballotContract = await ballotFactory.deploy(
      convertStringArrayToBytes32(PROPOSALS)
    );
    await ballotContract.deployed();
  });

  describe("when the contract is deployed", () => {
    it("has the provided proposals", async () => {
        for (let index = 0; index < PROPOSALS.length; index++) {
          const proposal = await ballotContract.proposals(index);
          expect(ethers.utils.parseBytes32String(proposal.name)).to.eq(
            PROPOSALS[index]
          );
        }
    });
    it("has zero votes for all proposals", async function () {
        // TODO
        for (let index = 0; index < PROPOSALS.length; index++) {
            const proposal = await ballotContract.proposals(index);
            expect(proposal.voteCount).to.eq(0);
          }
    });
    it("sets the deployer address as chairperson", async () => {
        // TODO
        const chairperson = await ballotContract.chairperson();
        const accounts = await ethers.getSigners();
        expect(chairperson).to.eq(accounts[0].address);
    });
    it("sets the voting weight for the chairperson as 1", async function () {
        // TODO
        const accounts = await ethers.getSigners();
        const voter = await ballotContract.voters(accounts[0].address);
        expect(voter.weight).to.eq(1);
    });
    });
});
