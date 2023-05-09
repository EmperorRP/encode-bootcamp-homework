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


