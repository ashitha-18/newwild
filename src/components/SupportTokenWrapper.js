import { Contract, ethers } from 'ethers';
import Wildpatron from "../SupportToken.json"; // Corrected import path

export async function donate(amount) {
  const contract = await getContract();

  try {
    const approvalTx = await contract.approve(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      amount
    );
    console.log("Approval Tx:", approvalTx);

    const transferTx = await contract.transfer(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      amount
    );
    console.log("Transfer Tx:", transferTx);

    const finalTx = await contract.acceptDonation(amount, {
      value: amount,
    });
    console.log("Final Tx:", finalTx);
  } catch (error) {
    console.error("Donation error:", error);
    throw error; 
  }
}

export async function getContract() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractABI = Wildpatron.abi;

  try {
    const { ethereum } = window;

    if (ethereum && ethereum.chainId === "0xaa36a7") {
      
      const  provider = new ethers.BrowserProvider(window.ethereum);
      const  signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      return contract;
    } else {
      throw new Error("Please connect to the sepolia test network");
    }
  } catch (error) {
    console.log("ERROR:", error);
    throw error; // Rethrow the error for handling in the calling function
  }
}
