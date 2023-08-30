import { Contract, ethers } from 'ethers';
import Wildpatron from "../SupportToken.json"; // Corrected import path

export async function donate(amount) {
  try {
    console.log(amount);
    const contract = await getContract();
    
    //const { ethereum } = window;
    if (!window.ethereum) {
      console.error("Ethereum not found");
      return false;
    }
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log('Connected to MetaMask!', accounts);
    const am = ethers.parseEther(amount);

  const recipient = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const estimation = await contract.transfer.estimateGas(recipient, am);
  console.log(estimation);
  const  provider = new ethers.BrowserProvider(window.ethereum);
  const  signer = await provider.getSigner();
  const tx = await signer.sendTransaction({
    to: recipient,
    value: am
  });
  console.log("whatt");
  // Often you may wish to wait until the transaction is mined
  const receipt = await tx.wait();
  
  console.log(receipt);

  return true; // Donation successful
} catch (error) {
  console.error("Donation error:", error);
  return false; // Donation failed
}

}




export async function getContract() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractABI = Wildpatron.abi;

  try {
    const { ethereum } = window;

    if (ethereum && ethereum.chainId === "0xaa36a7") {
      console.log("hereeee");
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
