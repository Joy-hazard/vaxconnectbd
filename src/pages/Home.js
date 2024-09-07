import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    
    <div>
        <Container className="mt-5">
      <Card className="text-center bg-light p-5">
        <h1>Welcome to vaXconnect Bangladesh</h1>
        <p>
          All vaccine information in one place for men, women, and animals.
          Apply for vaccinations, access vaccination certificates, and stay informed about vaccine schedules.
        </p>
        <Button variant="primary" className="mt-3">Apply for Vaccination</Button>
      </Card>

      <Row className="mt-5">
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Comprehensive Vaccine Database</Card.Title>
              <Card.Text>
                Access a vast library of vaccine information for different age groups, genders, and animals. Stay up-to-date with the latest vaccines available in Bangladesh and globally.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Track Your Vaccination Status</Card.Title>
              <Card.Text>
                Use our platform to track your vaccination registration status and receive timely notifications for upcoming doses or reminders for booster shots.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Digital Vaccine Certification</Card.Title>
              <Card.Text>
                Easily download or print your digital vaccination certificate after completing your vaccination. Keep your vaccination records organized and secure.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Real-time Chat Support</Card.Title>
              <Card.Text>
                Have questions about vaccinations? Our real-time chatbot is here to assist you with any queries and provide guidance on vaccine procedures, appointments, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
};

export default Home;
