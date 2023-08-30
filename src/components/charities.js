import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { donate } from "./SupportTokenWrapper"; // Corrected import path

const CharityCard = ({
  imageSrc,
  name,
  description,
  address,
  onDonate,
  
}) => {
  const [donationAmount, setDonationAmount] = useState("");
  

  



  const handleDonationSubmit = (event) => {
    event.preventDefault();
    onDonate(donationAmount);
    setDonationAmount("");
  };

  return (
    <div className="charity-card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Wallet Address : {address}
        </Card.Text>
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
        <Button variant="primary" style={{margin : '10px',}}>Donate</Button>
        </form>
      </Card.Body>
    </Card>
    </div>
  );
};



const charities = [
  {
    name: "Leo",
    description:
      "Lion - aged 5 years",
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    imageSrc:
      "https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name : "Eliie",
    description: "Elephant - aged 10 years",
    address : "0xee6E56276328b33C6250db0252125A8BaD0E38DE",
    imageSrc:
      "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg?auto=compress&cs=tinysrgb&w=600",    
    
  }
];


const Charities = () => {
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
      <button
        className="btn btn-primary"
        onClick={connectToMetaMask}
        style={{position:"relative",
        left: '50%',
        margin: '20px',
        }}>
        Connect to MetaMask
      </button>
      <div className="charity-card">
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


