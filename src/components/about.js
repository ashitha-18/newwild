import React from 'react';
import Card from 'react-bootstrap/Card';
import image from "../images/22.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="text-green-600 text-4xl text-center font-semibold pb-8">About Us</div>

      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 text-gray-700 text-lg text-center">
        <Card>
          <Card.Body>
            <p className="mb-6">
              At WildPatron, we are passionate about protecting and preserving our planet's incredible biodiversity. Our mission is to create a platform that empowers individuals and organizations to take a proactive role in safeguarding wild animals.
            </p>
            <p>
              WildPatron intends to enable individuals to contribute to the welfare of animals in national parks, sanctuaries, and other wildlife conservation areas through a transparent and accountable sponsorship process.
            </p>
          </Card.Body>
        </Card>

        <h3 className="text-2xl font-semibold text-green-600 mt-8">Donate to make a difference</h3>
      </div>
    </div>
  );
};

export default About;
