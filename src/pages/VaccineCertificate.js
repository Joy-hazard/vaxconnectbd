import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const VaccineCertificate = () => {
  const [showCert, setShowCert] = useState(false);
  const [certData, setCertData] = useState({
    name: '',
    id: '',
  });

  const handleChange = (e) => {
    setCertData({ ...certData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCert(true);
  };

  return (
    <Container>
      <h2>Download Vaccine Certificate</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={certData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Registration ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={certData.id}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Download Certificate
        </Button>
      </Form>

      {showCert && (
        <Alert variant="success" className="mt-4">
          Vaccine Certificate is being generated for {certData.name}. Download ready soon!
        </Alert>
      )}
    </Container>
  );
};

export default VaccineCertificate;
