import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { donate } from "./SupportTokenWrapper";
import image from "../images/22.jpeg";


const AnimalCard = ({
  imageSrc,
  name,
  description,
  organisation,
  address,
  onDonate,
}) => {
  const [donationAmount, setDonationAmount] = useState("");
  


  const handleDonationSubmit = (event) => {
    event.preventDefault();
    const recipient = address; 
    onDonate(recipient,donationAmount);
    setDonationAmount("");
  };

  return (
    
    <div className="animal-card bg-black hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"   >
      <Card className="bg-black  text-white" >
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title className="text-green-500 text-2xl font-semibold">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{organisation}</Card.Text>
          <Card.Text className="text-orange-500">Wallet Address: 
          </Card.Text>
          <Card.Text className="text-orange-300"> 
          {address}</Card.Text>
          <form onSubmit={handleDonationSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="donationAmount" className="text-white-500">
                Enter donation amount:
              </label>
              <input
                type="text"
                className="form-control"
                id="donationAmount"
                value={donationAmount}
                onChange={(event) => setDonationAmount(event.target.value)}
              />
            </div>
            <Button
              variant="primary"
              onClick={handleDonationSubmit}
              style={{ backgroundColor: 'orange', color: 'black' }}
              className="mt-3 hover:bg-green-600"
            >
              Donate
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
   
  );
};


const animals = [
  {
    name: "Leo",
    description: "Lion - aged 5 years ",
    organisation: "WildHome id : 147",
    address: "0x2Cb96CDb27e6604c8daDB0F22fA3f3b8f39e1182",
    imageSrc: "https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Eliie",
    description: "Elephant - aged 10 years",
    organisation: "WildHome id : 147",
    address: "0xee6E56276328b33C6250db0252125A8BaD0E38DE",
    imageSrc: "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
];

const Animals = () => {
  const [donated, setDonated] = useState(false);
  const [connected, setConnected] = useState(false);
  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log('Connected to MetaMask!', accounts);
        setConnected(true);
      } else {
        console.error('MetaMask not found. Please install MetaMask to use this application.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDonate = async (recipient, amount) => {
    try {
      
      const donationResult = await donate(recipient,amount);
      if (donationResult) {
        alert("Donation successful!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="container mx-auto py-10">
        <button
          className="btn btn-primary transition duration-300 ease-in-out transform hover:scale-105" style={{ backgroundColor: 'orange', color: 'black' }}
          onClick={connectToMetaMask}
        >
          Connect to MetaMask
        </button>
        <div className="animal-card container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-center" style={{position: "relative", left: '25%'}}>
        {animals.map((animal, index) => (
          <div key={index} className="w-full px-4 mb-8" >
            <AnimalCard {...animal} onDonate={handleDonate} />
          </div>
          
        ))}
      </div>
      </div>
    </div>
  );
};

export default Animals;
