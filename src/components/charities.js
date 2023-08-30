import React, { useState } from "react";
import { donate } from "./SupportTokenWrapper"; // Corrected import path

const CharityCard = ({
  imageSrc,
  name,
  description,
  address,
  onDonate,
  
}) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donated, setDonated] = useState(false);
  const [connected, setConnected] = useState(false); // Add connected state

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log('Connected to MetaMask!', accounts);
        setConnected(true); // Set connected state to true
      } else {
        console.error('MetaMask not found. Please install MetaMask to use this application.');
      }
    } catch (error) {
      console.error(error);
    }
  };



  const handleDonationSubmit = (event) => {
    event.preventDefault();
    onDonate(donationAmount);
    setDonationAmount("");
  };

  return (
    <div className="card">
       <button
        className="bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600"
        onClick={connectToMetaMask}
      >
        Connect to MetaMask
      </button>
      <img src={imageSrc} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mt-4">{description}</p>
        <p className="card-text mt-4">{address}</p>
        <form onSubmit={handleDonationSubmit}>
          <div className="form-group mt-4">
            <label htmlFor="donationAmount" className="mt-4">
              Enter donation amount:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="donationAmount"
              value={donationAmount}
              onChange={(event) => setDonationAmount(event.target.value)}
            />
          </div>
          <button className="bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600">
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

const charities = [
  {
    name: "British Heart Foundation",
    description:
      "Your donation can help us fight against heart diseases and support the millions of people affected by them.",
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    imageSrc:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name : "Hero",
    description: "The National Marine Mammal Foundation, San Diego",
    address : "0xee6E56276328b33C6250db0252125A8BaD0E38DE",
    imageSrc:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  }
];

const Charities = () => {
  const handleDonate = async (amount) => {
    try {
      await donate(amount);
      alert("Donation successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
    
      <div className="flex flex-wrap -mx-4">
        {charities.map((charity, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <CharityCard
              {...charity}
              onDonate={handleDonate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charities;


