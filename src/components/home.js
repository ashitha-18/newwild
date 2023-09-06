import React from 'react';
import { Container } from 'react-bootstrap';
import image from  "../images/wildpatron2.jpeg"
import Quiz from './quiz';

const WaitlistSignup = () => {
  const handleSignup = () => {
    // URL of your Google Form
    const googleFormUrl = 'https://forms.gle/VS242ujEjve4PVr16';

    // Open the Google Form in a new tab
    window.open(googleFormUrl, '_blank');
  };
  

  return (
<div className="min-h-screen bg-cover bg-center relative flex">
  <div className="w-1/2 relative" style={{ backgroundImage: `url(${image})` ,backgroundPosition: '60% 40%',backgroundSize: '120%'}}>
    <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
      <h6 className="text-black text-center">Join our digital sanctuary and financially support wild animals</h6>
      <button onClick={handleSignup} className="btn btn-primary mt-1 " style={{ backgroundColor: 'darkgreen', color: 'white'}}>
        Join Waitlist
      </button>
    </Container>
  </div>
  <div className="w-1/2 relative relative overflow-y-auto">
    <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-0 ">
    <Quiz></Quiz>
    </Container>
  </div>
</div>

  );
};

export default WaitlistSignup;


