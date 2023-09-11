import React, { useState } from 'react';
import image from  "../images/22.jpeg"

function OrganizationForm() {
  const [organizationName, setOrganizationName] = useState('');
  const [organizationId, setOrganizationId] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [animalWalletAddress, setAnimalWalletAddress] = useState('');
  const [animalImage, setAnimalImage] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('');
  const [animalDescription, setAnimalDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const animalData = {
      organizationName,
      organizationId,
      animalName,
      animalWalletAddress,
      animalImage,
      donationPurpose,
      animalDescription,
    };

    setOrganizationName('');
    setOrganizationId('');
    setAnimalName('');
    setAnimalWalletAddress('');
    setAnimalImage('');
    setDonationPurpose('');
    setAnimalDescription('');

    
  };
  const handleClick = () => {
    alert('Form submitted successfully!');
  };

  // Inline CSS for the background image of the entire page
  const pageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    position: 'relative',
    minHeight: '150vh',
    margin: '0', // Set margin to 0
    padding: '0', // Set padding to 0
  };

  return (
    <div style={pageStyle}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-dark text-white">
              <div className="card-body">
              <h2 className="text-center mb-4">
      <span style={{ textTransform: 'uppercase', fontWeight: 'bold', textDecoration: 'underline' }}>Add Animal Information</span>
    </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="organizationName" className="form-label font-weight-bold">Organization Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="organizationName"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="organizationId" className="form-label font-weight-bold">Organization ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="organizationId"
                    value={organizationId}
                    onChange={(e) => setOrganizationId(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="animalName" className="form-label font-weight-bold">Animal Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="animalName"
                    value={animalName}
                    onChange={(e) => setAnimalName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="animalWalletAddress" className="form-label font-weight-bold">Animal Wallet Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="animalWalletAddress"
                    value={animalWalletAddress}
                    onChange={(e) => setAnimalWalletAddress(e.target.value)}
                    required
                  />
                </div>
                  
                  <div className="mb-3">
                    <label htmlFor="animalImage" className="form-label font-weight-bold">Animal Image URL:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="animalImage"
                      value={animalImage}
                      onChange={(e) => setAnimalImage(e.target.value)}
                      required
                    />
                  </div>
                 
                  
                  <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{ backgroundColor: 'blue', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'green'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'blue'}
          onClick={handleClick} // Add the onClick event handler
        >
          Submit
        </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationForm;





