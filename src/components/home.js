import React from 'react';
import { Container } from 'react-bootstrap';
import image from  "../images/wildpatron.jpg"

const WaitlistSignup = () => {
  const handleSignup = () => {
    // URL of your Google Form
    const googleFormUrl = 'https://forms.gle/VS242ujEjve4PVr16';

    // Open the Google Form in a new tab
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div
      style={{
      
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',    
      }}
    >
      <Container
        style={{
          position: 'absolute', 
          top: '70%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          padding: '20px',
        }}
      >
        <h6>Join our digital sanctuary and financialy support wildanimals </h6>
        <button onClick={handleSignup} className="btn btn-primary" style={{ backgroundColor: 'rgb(0, 100, 0)', color: 'white' }}>
          Join Waitlist
        </button>
      </Container>
    </div>
  );
};

export default WaitlistSignup;


