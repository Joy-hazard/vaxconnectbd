import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoImage from '../assets/vaxconnect logo.png'; // Replace with the path to your logo image

const AuthLayout = ({ children }) => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Row className="w-100">
        <Col md={12} className="d-flex flex-column align-items-center">
          <img
            src={logoImage}
            alt="vaXconnect Logo"
            style={{
              height: '80px',
              marginBottom: '2rem',
            }}
          />
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
