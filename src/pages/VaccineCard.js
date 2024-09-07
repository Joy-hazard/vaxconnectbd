import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const VaccineCard = () => {
  const [showCard, setShowCard] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    vaccineType: '',
    date: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
  };

  return (
    <Container>
      <h2>Generate Vaccine Card</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Vaccine Type</Form.Label>
          <Form.Control
            type="text"
            name="vaccineType"
            value={userData.vaccineType}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Vaccination Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={userData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Generate Card
        </Button>
      </Form>

      {showCard && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Vaccine Card</Card.Title>
            <Card.Text>Name: {userData.name}</Card.Text>
            <Card.Text>Vaccine: {userData.vaccineType}</Card.Text>
            <Card.Text>Date: {userData.date}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default VaccineCard;
