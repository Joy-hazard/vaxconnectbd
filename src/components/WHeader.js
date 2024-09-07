import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logoImage from '../assets/vaxconnect logo.png'; // Replace with the path to your logo image

const WHeader = () => {
  return (
    <Navbar 
      bg="light" 
      variant="light" 
      expand="lg" 
      style={{ 
        padding: '0 1rem', 
        backgroundColor: '#f8f9fa', // Light background color
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for a more pronounced look
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logoImage}
          alt="vaXconnect Logo"
          style={{
            height: '40px',
            marginRight: '0.5rem',
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: 'auto' }}>
          <Nav.Link href="/" style={navStyle}>Home</Nav.Link>
          <Nav.Link href="/apply" style={navStyle}>Apply</Nav.Link>
          <Nav.Link href="/status" style={navStyle}>Status</Nav.Link>
          <Nav.Link href="/certificate" style={navStyle}>Certificates</Nav.Link>
          <Nav.Link href="/login" style={navStyle}>Login</Nav.Link>
          <Nav.Link href="/register" style={navStyle}>Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const navStyle = {
  margin: '0 0.5rem',
  color: '#343a40', // Dark color for text
  fontWeight: '500',
  transition: 'color 0.3s ease',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  textDecoration: 'none',
};

export default WHeader;
