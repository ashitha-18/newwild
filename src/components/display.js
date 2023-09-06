import React from 'react';
import Card from 'react-bootstrap/Card';
import image from "../images/22.jpeg";
import Quiz from './quiz';

const Display = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center" style={{ backgroundImage: `url(${image})` }}>
      <Quiz> </Quiz>
    </div>
  );
};

export default Display;
