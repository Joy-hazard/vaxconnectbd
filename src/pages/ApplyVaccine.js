import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ApplyVaccine = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    vaccineType: '',
    hospital: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
  };

  return (
    <Container>
      <h2>Apply for Vaccine</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Vaccine Type</Form.Label>
          <Form.Control
            as="select"
            name="vaccineType"
            value={formData.vaccineType}
            onChange={handleChange}
            required
          >
            <option>COVID-19</option>
            <option>Rabies</option>
            <option>Influenza</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Preferred Hospital</Form.Label>
          <Form.Control
            type="text"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ApplyVaccine;
