import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationStatus = () => {
  const [formData, setFormData] = useState({ registrationId: '' });
  const [status, setStatus] = useState(null); // Placeholder for vaccine status
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    // Simulate fetching data
    setStatus({
      hasTakenDose: false, // True if dose taken
      nextDoseDate: '2024-10-15',
    });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Check Your Vaccine Registration Status</h2>
      <p className="text-center mb-4">
        Enter your Registration ID below to check the status of your vaccine application and dose eligibility.
      </p>
      
      <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded" style={{ backgroundColor: '#f9fafb' }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Registration ID</Form.Label>
              <Form.Control
                type="text"
                name="registrationId"
                value={formData.registrationId}
                onChange={handleChange}
                placeholder="Enter your registration ID"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="primary" type="submit" className="w-50">
            Check Status
          </Button>
        </div>
      </Form>

      {showAlert && (
        <Alert variant="success" className="mt-4 text-center">
          Registration status fetched successfully!
        </Alert>
      )}

      {status && (
        <Card className="mt-5 shadow-lg" style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <Card.Body>
            <h4 className="text-center mb-4">Vaccine Status</h4>
            {status.hasTakenDose ? (
              <p className="text-center">
                <strong>Congratulations!</strong> You have taken your first dose.
              </p>
            ) : (
              <p className="text-center">
                <strong>No dose taken yet.</strong> You are eligible to take the next dose on <strong>{status.nextDoseDate}</strong>.
              </p>
            )}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default RegistrationStatus;
