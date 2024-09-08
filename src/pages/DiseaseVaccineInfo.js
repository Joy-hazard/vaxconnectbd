// src/pages/DiseaseVaccineInfo.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaVirus, FaVial, FaTemperatureHigh, FaSyringe, FaPills, FaStethoscope } from 'react-icons/fa';

const diseaseImages = {
  'COVID-19': ['/assets/diseases/covid-1.jfif', '/assets/diseases/covid-2.jfif'],
  'Influenza': ['/assets/diseases/influenza-1.jfif', '/assets/diseases/influenza-2.jpg'],
  'Hepatitis B': ['/assets/diseases/hepatitis-b-1.jpg', '/assets/diseases/hepatitis-b-2.jpg'],
  'Measles': ['/assets/diseases/measles-1.jpg', '/assets/diseases/measles-2.jpg'],
  'Polio': ['/assets/diseases/polio-1.jpg', '/assets/diseases/polio-2.jpg'],
  'Tuberculosis': ['/assets/diseases/tuberculosis-1.jpg', '/assets/diseases/tuberculosis-2.jpg']
};


const diseaseVaccineData = [
  {
    disease: 'COVID-19',
    details: 'COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. It can lead to severe respiratory issues and other complications. It spreads through respiratory droplets and can be severe in older adults and those with underlying health conditions.',
    symptoms: [
      'Fever',
      'Cough',
      'Shortness of breath',
      'Fatigue',
      'Loss of taste or smell'
    ],
    vaccines: [
      'Pfizer-BioNTech',
      'Moderna',
      'Johnson & Johnson'
    ],
    icon: <FaVirus style={{ fontSize: '2rem', color: '#007bff' }} />,
    images: diseaseImages['COVID-19']
  },
  {
    disease: 'Influenza',
    details: 'Influenza, commonly known as the flu, is a viral infection that affects the respiratory system. Symptoms include fever, cough, sore throat, and body aches.',
    symptoms: [
      'Fever',
      'Cough',
      'Sore throat',
      'Runny or stuffy nose',
      'Muscle or body aches'
    ],
    vaccines: [
      'Fluzone',
      'FluMist',
      'Fluarix'
    ],
    icon: <FaTemperatureHigh style={{ fontSize: '2rem', color: '#17a2b8' }} />,
    images: diseaseImages['Influenza']
  },
  {
    disease: 'Hepatitis B',
    details: 'Hepatitis B is a viral infection that attacks the liver and can cause both acute and chronic diseases. It is spread through contact with infectious body fluids.',
    symptoms: [
      'Jaundice',
      'Abdominal pain',
      'Dark urine',
      'Extreme fatigue',
      'Loss of appetite'
    ],
    vaccines: [
      'Hepatitis B Vaccine'
    ],
    icon: <FaSyringe style={{ fontSize: '2rem', color: '#28a745' }} />,
    images: diseaseImages['Hepatitis B']
  },
  {
    disease: 'Measles',
    details: 'Measles is a highly contagious viral disease characterized by a distinctive rash and high fever. It is spread through respiratory droplets.',
    symptoms: [
      'High fever',
      'Cough',
      'Runny nose',
      'Red eyes',
      'Rash'
    ],
    vaccines: [
      'MMR Vaccine'
    ],
    icon: <FaPills style={{ fontSize: '2rem', color: '#ffc107' }} />,
    images: diseaseImages['Measles']
  },
  {
    disease: 'Polio',
    details: 'Polio is a disabling and life-threatening disease caused by the poliovirus. It mainly affects children under 5 years of age and can lead to paralysis.',
    symptoms: [
      'Fever',
      'Fatigue',
      'Headache',
      'Vomiting',
      'Stiffness in the neck'
    ],
    vaccines: [
      'Polio Vaccine'
    ],
    icon: <FaStethoscope style={{ fontSize: '2rem', color: '#6f42c1' }} />,
    images: diseaseImages['Polio']
  },
  {
    disease: 'Tuberculosis',
    details: 'Tuberculosis (TB) is a bacterial infection that primarily affects the lungs but can affect other parts of the body. It is spread through airborne droplets.',
    symptoms: [
      'Persistent cough',
      'Chest pain',
      'Coughing up blood',
      'Weight loss',
      'Night sweats'
    ],
    vaccines: [
      'BCG Vaccine'
    ],
    icon: <FaVial style={{ fontSize: '2rem', color: '#dc3545' }} />,
    images: diseaseImages['Tuberculosis']
  }
];

const DiseaseVaccineInfo = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Disease and Vaccine Information</h2>
      <Row>
        {diseaseVaccineData.map((item, index) => (
          <Col xs={12} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Row>
                  <Col md={6} className="d-flex align-items-start">
                    <div className="mr-3">
                      {item.icon}
                    </div>
                    <div>
                      <Card.Title>{item.disease}</Card.Title>
                      <Card.Text>{item.details}</Card.Text>
                      <Card.Subtitle className="mb-2 text-muted">Symptoms:</Card.Subtitle>
                      <ul>
                        {item.symptoms.map((symptom, idx) => (
                          <li key={idx}>{symptom}</li>
                        ))}
                      </ul>
                      <Card.Subtitle className="mb-2 text-muted">Recommended Vaccines:</Card.Subtitle>
                      <ul>
                        {item.vaccines.map((vaccine, idx) => (
                          <li key={idx}>{vaccine}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Row>
                      {item.images.map((image, idx) => (
                        <Col xs={12} md={6} key={idx} className="mb-2">
                          <Card.Img variant="top" src={image} alt={`${item.disease} ${idx}`} />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DiseaseVaccineInfo;
