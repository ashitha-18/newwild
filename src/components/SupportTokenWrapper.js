import React, { useState, useEffect } from 'react';
import { providers, Contract, ethers } from 'ethers';
import Wildpatron from "/home/ashi_unix/newwild/frontend/src/SupportToken.json";

function New() {

useEffect(() => {
  setData(jsonData);
}, []);

useEffect(() => {
  if (window.ethereum && window.ethereum.selectedAddress) {
    const selectedAddress = window.ethereum.selectedAddress;
    console.log(`Connected to MetaMask with address: ${selectedAddress}`);
    setAddress(selectedAddress);
    setConnected(true);

  } else {
    console.log('MetaMask is not connected');
    setConnected(false);
  }
}, []);

const connectToMetaMask = async () => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setAddress(accounts[0]);
      console.log('Connected to MetaMask!', accounts);
      setConnected(true);
    } else {
      console.error('MetaMask not found. Please install MetaMask to use this application.');
    }
  } catch (error) {
    console.error(error);
  }
};
return (
  <div className="App">
    <div className="connectBtns">
      <div>
        {!connected && (
          <button onClick={connectToMetaMask}>
            Connect To MetaMask
          </button>
        )}
      </div>
    </div>

   </div>
);
}

export default New;

export async function getContract() {
    console.log("hey");
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractABI = Wildpatron.abi;
    let supportTokenContract;
    try {
      const { ethereum } = window;
      console.log(ethereum.chainId);
      if (ethereum.chainId === "0xaa36a7") {
        const provider = new providers.Web3Provider(ethereum);
        
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, Wildpatron.abi, signer);
        console.log("provider",  contract);
        
        supportTokenContract = new Contract(contractAddress, contractABI, signer);
      } else {
        throw new Error("Please connect to the Alfajores network");
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
    console.log(supportTokenContract);
    return supportTokenContract;
  }
  
  export async function donate(amount) {
    // Approve the transfer of donation amount to the charity address
  
    const contract = await getContract();
    const approvalTx = await contract.approve(
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
      amount
    );
    console.log(await contract);
    console.log(await approvalTx);
    // Transfer tokens to another account
    const transferTx = await contract.transfer(
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
      amount
    );
    console.log("Transfer transaction hash: ", transferTx.transactionHash);
    const finalTx = await contract.acceptDonation(amount, {
      value: amount,
    });
  }