# Solidity Homework - Interact with HelloWorld.sol

This repository contains the contract `HelloWorld.sol`, which is a simple contract that allows the owner to change the message string and change the contract owner. This repository also includes a detailed report on interacting with the contract's functions and the corresponding transaction hashes or revert reasons.

## Table of Contents

- [Contract Overview](#contract-overview)
- [Assignment](#assignment)
- [Functions](#functions)
  - [changeName](#changename)
  - [changeOwner](#changeowner)
  - [getName](#getname)
  - [getBalanceOwner](#getbalanceowner)
  - [getFunds](#getfunds)
  - [getBalanceContract](#getbalancecontract)
- [Report](#Report)
- [Full Code](#Full-Code)

## Contract Overview

`HelloWorld.sol` is a Solidity smart contract deployed on the Ethereum blockchain on Sepolia Testnet. The contract allows the owner to change the name, change the contract owner, and manage funds associated with the contract.

Contract Address: [`0x0442607f59b78f35fca89efed70f76de07f27f93`](https://sepolia.etherscan.io/address/0x0442607f59b78f35fca89efed70f76de07f27f93#code)

_Follow the above link for the code_

## Assignment

Interact with the `HelloWorld.sol` contract to change message strings and change owners. Write a report containing the execution of each function along with the transaction hash (if successful) or the revert reason (if failed).

## Functions

### changeName()

```solidity
function changeName(string calldata newName) external;
```
Changes the name stored in the contract. This function can only be called by the contract owner.

### changeOwner()

```solidity
function changeOwner(address payable newOwner) external;
```
Changes the contract owner to the specified address. This function can only be called by the contract owner.

### getName()
```solidity
function getName() external view returns (string memory);
```

### getBalanceOwner()
```solidity
function getBalanceOwner() external returns (uint);
```
Returns the balance of the contract owner.


### getFunds()
```solidity
function getFunds() external payable;
```
Transfers funds from the contract to the contract owner. This function can only be called by the contract owner.

### getBalanceContract()
```solidity
function getBalanceContract() external returns (uint);
```
Returns the balance of the contract.

## Report
For each interaction with the contract, the report includes the following information:

- Function executed
- Parameters used
- Transaction hash (if successful)
- Revert reason (if failed)

| Function     | Parameters              | Output  | Transaction Hash/Revert Reason |
|--------------|-------------------------|---------|--------------------------------|
| changeName   | "Alice"                 |    -    |0x75fe01ad0e091a5f99482151c1147be2f9ffd5668ba9bdf6cdc14014e0c81555  |
| changeOwner  | 0x5678...               |    -    | 0x1e133a74cf3b79e2ec961e19f46e3bb84d55fa1db8d5c3b8198dacbee4b0dfcd  |
| getName      | -                       |Alice    | 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4  |
| getFunds     | -                       | -       | 0xa7c0f994b123c44af0d16b4c1ec713ffc844bc20f453fad5ba3b8e1df1a88ef5                     |
| getBalanceOwner | -                    |99999999999995278007 wei|                     |
| getBalanceContract | -                 | 0        | 0xd76869a117a0e1ef8c324143ceac8699879a1a22478bfc79e57aa895ffd09f36  |

## Full Code

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

interface IHelloWorld{
    function changeName(string calldata newName) external;
    function changeOwner(address payable newOwner) external;
    function getName() external view returns(string memory);
    function getBalanceOwner() external returns(uint);
    function getFunds() external payable;
    function getBalanceContract() external returns(uint);
}

contract HelloWorld is IHelloWorld{
    string public name;
    address payable public owner;
    mapping(address => uint) public balances;

    constructor() payable{
        name = "Rahul";
        owner = payable(msg.sender);
        balances[owner] = 0;
    }

    modifier _onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    modifier _nameCheck(string calldata newName){
        require(keccak256(bytes(name)) != keccak256(bytes(newName)), string (abi.encodePacked("Name is already ", newName)));
        _;
    }

    function getFunds() public _onlyOwner payable{
        owner.transfer(address(this).balance);
        balances[owner] += msg.value; 
    } 

    function changeName(string calldata newName) public _onlyOwner{
        name = newName;
    }

    function changeOwner(address payable newOwner) public{
        owner = newOwner;
    }

    function getName() public view returns(string memory){
        return name;
    }

    function getBalanceOwner() public view returns(uint) {
        return address(owner).balance;
    }

    function getBalanceContract() public view returns(uint) {
        return address(this).balance;
    }
}
```

Thank you for reading up till here :)



