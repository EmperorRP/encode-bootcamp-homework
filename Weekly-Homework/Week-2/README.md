# Encode Homework Week 2

## Table of Contents
- [Solidity Voting with Ballot.sol](#solidity-voting-with-ballotsol)
  * [Features](#features)
  * [Contract Deployment](#contract-deployment)
  * [Functions](#functions)
    + [constructor(bytes32[] memory proposalNames)](#constructorbytes32-memory-proposalnames)
    + [giveRightToVote(address voter)](#giverighttovoteaddress-voter)
    + [delegate(address to)](#delegateaddress-to)
    + [vote(uint proposal)](#voteuint-proposal)
    + [winningProposal()](#winningproposal)
    + [winnerName()](#winnername)
- [More Transactions](more-transactions)

## Solidity Voting with Ballot.sol

This is a smart contract called Ballot.sol for implementing a voting system with delegation functionality.

## Features
- Creating a new ballot with a list of proposal names
- Giving the right to vote to an address (only by the chairperson)
- Delegating your vote to another voter
- Voting on a proposal
- Computing the winning proposal
- Getting the winner's name

## Contract Deployment

- Contract Name: Ballot
- Submitted for verification at Etherscan.io on 2023-05-09
- SPDX-License-Identifier: GPL-3.0
- Solidity Version: 0.7.0 <0.9.0
- Deployed and Verified at: [Link](https://sepolia.etherscan.io/address/0x90afF817eE236B2b643c650d64B9AeE5420C7F02#code)

## Functions

The following functions are available in the contract:

### constructor(bytes32[] memory proposalNames)

- Description: Create a new ballot with a list of proposal names.
- Input: proposalNames (Array of bytes32)

### giveRightToVote(address voter)

- Description: Give `voter` the right to vote on this ballot. Can only be called by the chairperson.
- Input: voter (address)
- Hash:
  * Transaction Succesful: 0xc9a88853fb56f056df0753be755385f00b2485683989121998f0a7d8a94100f2
  * Transaction Failed: 0x01e7e9495fcdd970bde30b84c1ec5f2c4d3abd77d19b34f9b5023358b77f1ece with Revert reason: "The voter already voted."

### vote(uint proposal)

- Description: Give your vote (including votes delegated to you) to the proposal `proposals[proposal].name`.
- Input: proposal (uint)
- Output: None
- Revert Reason: "Has no right to vote" or "Already voted."
- Hash:
   * Transaction Succesful: 0x688801bcc69cb60e9f62c436377cfedd0fe83f8daf44cc37da6af23131d76517
   * Transaction Failed: 0x19482db771b7b9df6d970ca1522d5f392ebc20d451936c36e27249f956d15aff with reason 'Already voted.'

### delegate(address to)

- Description: Delegate your vote to the voter `to`.
- Input: to (address)
- Output: None
- Revert Reason: "You have no right to vote", "You already voted.", "Self-delegation is disallowed." or "Found loop in delegation."

### winningProposal()

- Description: Computes the winning proposal taking all previous votes into account.
- Input: None
- Output: winningProposal_ (uint)

### winnerName()

- Description: Calls winningProposal() function to get the index of the winner contained in the proposals array and then returns the name of the winner.
- Input: None
- Output: winnerName_ (bytes32)

## More Transactions:

From address: 0x26593df687d4003b27dA1E40D1023eaC8cdfa9Aa\
Transaction Hash: 0xa6ae4b64944b75bba994eeee5aeefbc0f53c1b0d56379eed8335918c369e0d68\
Function called: giveRightToVote(address voter)\
[Transaction Link](https://sepolia.etherscan.io/tx/0xa6ae4b64944b75bba994eeee5aeefbc0f53c1b0d56379eed8335918c369e0d68)\
Reason for revert: 'Only chairperson can give right to vote.'

From address: 0x0d1f2b79ac251295c72b1fd9d141ca41d4f78d49\
Transaction Hash: 0x688801bcc69cb60e9f62c436377cfedd0fe83f8daf44cc37da6af23131d76517\
Function called: vote(uint proposal)\
[Transaction Link](https://sepolia.etherscan.io/tx/0xa6ae4b64944b75bba994eeee5aeefbc0f53c1b0d56379eed8335918c369e0d68)\
Transaction Successful

From address: 0x0d1f2b79ac251295c72b1fd9d141ca41d4f78d49\
Transaction Hash: 0x01e7e9495fcdd970bde30b84c1ec5f2c4d3abd77d19b34f9b5023358b77f1ece\
Function called: giveRightToVote(address voter)\
[Transaction Link](https://sepolia.etherscan.io/tx/0x01e7e9495fcdd970bde30b84c1ec5f2c4d3abd77d19b34f9b5023358b77f1ece)\
Reason for revert: 'The voter already voted.'

From address: 0xaD57E1d8C0C0272954DC37940c8e1b4d5c4aB9bf\
Transaction Hash: 0x23719fb865b665b438f709d42d8a2a35b4eb29f53721dadeeae40fe9ed2e3d6d\
Function called: vote(uint proposal)\
[Transaction Link](https://sepolia.etherscan.io/tx/0x23719fb865b665b438f709d42d8a2a35b4eb29f53721dadeeae40fe9ed2e3d6d)\
Transaction Successful

From address: 0xad57e1d8c0c0272954dc37940c8e1b4d5c4ab9bf\
Transaction Hash: 0x57499e3436901c79042941773fee087448ef7518e1ec6f3124a38475f1c72ff1\
Function called: vote(uint proposal)\
[Transaction Link](https://sepolia.etherscan.io/tx/0x57499e3436901c79042941773fee087448ef7518e1ec6f3124a38475f1c72ff1)\
Reason for revert: 'Already voted.'

From address:0x26593df687d4003b27da1e40d1023eac8cdfa9aa\
Transaction Hash: 0x6d7f95c494149d3e31628dd20b0b2d6b71050a636d858854586e8abfa44e8854\
Function called: delegate(address to)\
[Transaction Link](https://sepolia.etherscan.io/tx/0x6d7f95c494149d3e31628dd20b0b2d6b71050a636d858854586e8abfa44e8854)\
Reason for revert: 'You have no right to vote'


