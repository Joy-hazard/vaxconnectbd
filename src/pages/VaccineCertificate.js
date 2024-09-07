import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const VaccineCertificate = () => {
  const [showCertAndCard, setShowCertAndCard] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nid: '',
    regId: '',
    vaccineType: '',
    vaccineCompany: '',
    doseNumber: '',
    hospital: 'Dhaka Medical College', // Automatically assigned hospital
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCertAndCard(true);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Vaccine Certificate & Card Generation</h2>
      <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded" style={{ backgroundColor: '#f8f9fa' }}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>NID</Form.Label>
              <Form.Control
                type="text"
                name="nid"
                value={formData.nid}
                onChange={handleChange}
                required
                placeholder="Enter your National ID"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Registration ID</Form.Label>
              <Form.Control
                type="text"
                name="regId"
                value={formData.regId}
                onChange={handleChange}
                required
                placeholder="Enter your vaccine registration ID"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Vaccine Type</Form.Label>
              <Form.Control
                type="text"
                name="vaccineType"
                value={formData.vaccineType}
                onChange={handleChange}
                required
                placeholder="e.g., Pfizer, Moderna"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Vaccine Company</Form.Label>
              <Form.Control
                type="text"
                name="vaccineCompany"
                value={formData.vaccineCompany}
                onChange={handleChange}
                required
                placeholder="e.g., BioNTech, AstraZeneca"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Dose Number</Form.Label>
              <Form.Control
                type="number"
                name="doseNumber"
                value={formData.doseNumber}
                onChange={handleChange}
                required
                placeholder="Enter your dose number"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>Vaccination Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#007bff', border: 'none', borderRadius: '20px' }}>
          Generate Certificate & Card
        </Button>
      </Form>

      {showCertAndCard && (
        <div className="mt-5">
          {/* Certificate Section */}
          <Alert variant="success" className="text-center" style={{ padding: '40px', borderRadius: '20px', backgroundImage: 'url(/path-to-background-pattern.jpg)', backgroundSize: 'cover' }}>
            <div className="certificate-header">
              <img src="/path-to-logo.png" alt="Logo" style={{ height: '80px', float: 'left' }} />
              <h2 style={{ float: 'right' }}>Vaccine Certificate</h2>
            </div>
            <div className="certificate-content" style={{ marginTop: '100px' }}>
              <Row>
                <Col md={6}>
                  <p style={{ fontSize: '1.2rem', textAlign: 'left' }}>
                    <strong>Name:</strong> {formData.name} <br />
                    <strong>NID:</strong> {formData.nid} <br />
                    <strong>Registration ID:</strong> {formData.regId}
                  </p>
                </Col>
                <Col md={6}>
                  <p style={{ fontSize: '1.2rem', textAlign: 'left' }}>
                    <strong>Vaccine:</strong> {formData.vaccineType} <br />
                    <strong>Company:</strong> {formData.vaccineCompany} <br />
                    <strong>Dose:</strong> {formData.doseNumber} <br />
                    <strong>Date:</strong> {formData.date}
                  </p>
                </Col>
              </Row>
            </div>
            <p style={{ marginTop: '50px', textAlign: 'right' }}>Authorized Signature</p>
          </Alert>

          {/* Vaccine Card Section */}
          <Card className="mt-4" style={{ maxWidth: '350px', margin: 'auto', borderRadius: '15px', padding: '15px', backgroundImage: 'url(/path-to-pattern.jpg)', backgroundSize: 'cover', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body>
              <Card.Title className="text-center">Vaccine Card</Card.Title>
              <Card.Text className="text-center" style={{ fontSize: '1rem', textAlign: 'left' }}>
                <strong>Name:</strong> {formData.name} <br />
                <strong>Vaccine:</strong> {formData.vaccineType} <br />
                <strong>Company:</strong> {formData.vaccineCompany} <br />
                <strong>Dose Number:</strong> {formData.doseNumber} <br />
                <strong>Date:</strong> {formData.date} <br />
                <strong>Hospital:</strong> {formData.hospital}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default VaccineCertificate;
