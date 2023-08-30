import React from 'react';
import Card from 'react-bootstrap/Card';
import image from  "/home/ashi_unix/newwild/frontend/src/images/22.jpeg"
const About = () => {
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
      <div className='heading'>
        About Us
      </div>
      
      <Card style={{ width: '38rem' ,left: '30%',position: 'relative', top: '10%'
        
         
        }}>
      <Card.Body>At WildPatron, we are passionate about protecting and preserving our planet's incredible biodiversity. Our mission is to create a platform that empowers individuals and organizations to take a proactive role in safeguarding wild animals.<br></br> WildPatron intends to enable individuals to contribute to the welfare of animals in national parks, sanctuaries, and other wildlife conservation areas through a transparent and accountable sponsorship process</Card.Body>
      </Card>
      <h3 style={{position: 'relative', top: '20%'         
         
      }}>Donate to make a difference</h3>
    </div>
  );
};

export default About;
