import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import WaitlistSignup from './home';
import Charities from './charities';
import About from './about';

function Mynavbar() {
  return (
    <Router>
    <Navbar bg="dark" variant="dark">
      <Container>
        
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/donate">Donate</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
          <Route path="/" exact element={<WaitlistSignup/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/donate" element={<Charities/>}  />
    </Routes>

</Router>
  );
}

export default Mynavbar;
