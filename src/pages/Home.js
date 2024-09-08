import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaSearch, FaCalendarCheck, FaFileDownload, FaHeadset, FaShieldAlt, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Home = () => {
  return (
    <div>
      <Container className="mt-5">
        {/* Hero Section */}
        <Card className="text-center bg-light p-5 rounded shadow-sm">
          <Card.Body>
            <h1>Welcome to vaXconnect Bangladesh</h1>
            <p>
              Your one-stop platform for comprehensive vaccine information for men, women, and animals. Apply for vaccinations, access certificates, and stay informed about vaccine schedules and updates.
            </p>
            <Link to="/apply">
              <Button variant="primary" className="mt-3">Apply for Vaccination</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Features Section */}
        <Row className="mt-5">
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <FaSearch style={{ fontSize: '2rem', color: '#007bff' }} />
                <Card.Title className="mt-3">Comprehensive Vaccine Database</Card.Title>
                <Card.Text>
                  Access a vast library of vaccine information tailored for different demographics. Stay updated with the latest vaccines available both locally and globally.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <FaCalendarCheck style={{ fontSize: '2rem', color: '#17a2b8' }} />
                <Card.Title className="mt-3">Track Your Vaccination Status</Card.Title>
                <Card.Text>
                  Monitor your vaccination status and receive timely notifications for upcoming doses or reminders for booster shots.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <FaFileDownload style={{ fontSize: '2rem', color: '#28a745' }} />
                <Card.Title className="mt-3">Digital Vaccine Certification</Card.Title>
                <Card.Text>
                  Download or print your digital vaccination certificate with ease. Keep your records organized and secure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <FaHeadset style={{ fontSize: '2rem', color: '#ffc107' }} />
                <Card.Title className="mt-3">Real-time Chat Support</Card.Title>
                <Card.Text>
                  Get instant answers to your questions with our real-time chatbot. Assistance with vaccine procedures, appointments, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <FaShieldAlt style={{ fontSize: '2rem', color: '#dc3545' }} />
                <Card.Title className="mt-3">Secure & Confidential</Card.Title>
                <Card.Text>
                  We prioritize your privacy and security. Your vaccination information is kept confidential and secure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <FaUserShield style={{ fontSize: '2rem', color: '#6f42c1' }} />
                <Card.Title className="mt-3">Personalized Assistance</Card.Title>
                <Card.Text>
                  Receive tailored support and guidance based on your specific vaccination needs and history.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <Button variant="outline-primary" size="lg" href="https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination" target="_self">Learn More About Vaccines</Button>
          </Col>
        </Row>

        {/* Additional Info Section */}
        <Row className="mt-5 text-center">
          <Col>
            <h3>Why Choose vaXconnect Bangladesh?</h3>
            <p>
              Our platform offers comprehensive vaccine information, easy access to certificates, real-time support, and secure, personalized assistance. Explore our features and stay informed.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
