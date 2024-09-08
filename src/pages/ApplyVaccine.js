import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckCircleFill } from 'react-bootstrap-icons';

const districts = [
  { value: 'Dhaka', label: 'Dhaka' },
  { value: 'Munshiganj', label: 'Munshiganj' },
  { value: 'Savar', label: 'Savar' },
  { value: 'Faridpur', label: 'Faridpur' },
  { value: 'Chittagong', label: 'Chittagong' },
  { value: 'Barishal', label: 'Barishal' },
  { value: 'Sylhet', label: 'Sylhet' },
  // Add more districts here
];

const subDistricts = {
  Dhaka: [
    { value: 'Dhanmondi', label: 'Dhanmondi' },
    { value: 'Jatrabari', label: 'Jatrabari' },
    { value: 'Mohammadpur', label: 'Mohammadpur' },
    { value: 'Uttara', label: 'Uttara' },
  ],
  Munshiganj: [
    { value: 'Sreenagar', label: 'Sreenagar' },
    { value: 'Lohajang', label: 'Lohajang' },
  ],
  Savar: [
    { value: 'Ashulia', label: 'Ashulia' },
    { value: 'Hemayetpur', label: 'Hemayetpur' },
  ],
  // Add more subdistricts for other districts
};

const hospitals = {
  Dhaka: [
    { value: 'Dhaka Medical College', label: 'Dhaka Medical College' },
    { value: 'Mitford Hospital', label: 'Mitford Hospital' },
    { value: 'Seba General Hospital', label: 'Seba General Hospital' },
  ],
  Munshiganj: [
    { value: 'Yasmin Delowar Hospital', label: 'Yasmin Delowar Hospital' },
    { value: 'Munshiganj Sadar Hospital', label: 'Munshiganj Sadar Hospital' },
  ],
  // Add hospitals for other districts
};

const ApplyVaccine = () => {
  const [formData, setFormData] = useState({
    name: '',
    nid: '',
    gender: '',
    dob: '',
    age: '',
    address: '',
    disease: '',
    vaccineType: '',
    district: '',
    subDistrict: '',
    hospital: '',
    photo: null,
  });

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null); // Added this line
  const [showModal, setShowModal] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setFormData({
      ...formData,
      district: selectedOption.value,
      subDistrict: '',
      hospital: '',
    });
  };

  const handleSubDistrictChange = (selectedOption) => {
    setFormData({ ...formData, subDistrict: selectedOption.value });
  };

  const handleHospitalChange = (selectedOption) => {
    setFormData({ ...formData, hospital: selectedOption.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });

    // Generate a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Apply for Vaccine</h2>
      <Form
        onSubmit={handleSubmit}
        className="p-4 shadow-lg rounded"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        {/* Patient Photo Field */}
        <Row>
          <Col md={12} className="text-center">
            <Form.Group className="mb-3">
              <Form.Label>Patient Photo</Form.Label>
              <div className="d-flex justify-content-center">
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #007bff',
                    marginBottom: '20px',
                  }}
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      No Photo
                    </div>
                  )}
                </div>
              </div>
              <Form.Control type="file" onChange={handleFileChange} required />
            </Form.Group>
          </Col>
        </Row>

        {/* Name and NID Fields */}
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
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Date of Birth and Age Fields */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Gender and Address Fields */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Disease Name Field */}
        <Form.Group className="mb-3">
          <Form.Label>Disease Name</Form.Label>
          <Form.Control
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            required
            placeholder="e.g., COVID-19, Influenza"
          />
        </Form.Group>

        {/* Vaccine Type Field */}
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

        {/* District Selection */}
        <Form.Group className="mb-3">
          <Form.Label>District</Form.Label>
          <Select
            options={districts}
            value={
              selectedDistrict
                ? { value: selectedDistrict.value, label: selectedDistrict.label }
                : null
            }
            onChange={handleDistrictChange}
            placeholder="Select District"
            isSearchable
          />
        </Form.Group>

        {/* Subdistrict Selection */}
        {selectedDistrict && (
          <Form.Group className="mb-3">
            <Form.Label>Subdistrict</Form.Label>
            <Select
              options={subDistricts[selectedDistrict.value]}
              value={
                formData.subDistrict
                  ? { value: formData.subDistrict, label: formData.subDistrict }
                  : null
              }
              onChange={handleSubDistrictChange}
              placeholder="Select Subdistrict"
              isSearchable
            />
          </Form.Group>
        )}

        {/* Hospital Selection */}
        {formData.subDistrict && (
          <Form.Group className="mb-3">
            <Form.Label>Hospital</Form.Label>
            <Select
              options={hospitals[selectedDistrict.value]}
              value={
                formData.hospital
                  ? { value: formData.hospital, label: formData.hospital }
                  : null
              }
              onChange={handleHospitalChange}
              placeholder="Select Hospital"
              isSearchable
            />
          </Form.Group>
        )}

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
      {/* Success Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="text-center" style={{ padding: '30px' }}>
          <div className="mb-3">
            <CheckCircleFill style={{ fontSize: '4rem', color: '#007bff' }} /> {/* Blue tick mark */}
          </div>
          <h4 className="mb-3">Your form has been submitted successfully!</h4>
          <Button variant="primary" onClick={handleClose} className="mt-3" style={{ borderRadius: '20px', padding: '10px 30px' }}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ApplyVaccine;
