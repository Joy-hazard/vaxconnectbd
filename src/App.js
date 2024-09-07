import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/WHeader';
import Footer from './components/WFooter';
import Home from './pages/Home';
import ApplyVaccine from './pages/ApplyVaccine';
import RegistrationStatus from './pages/RegistrationStatus';
import VaccineCard from './pages/VaccineCard';
import VaccineCertificate from './pages/VaccineCertificate';
import Chatbot from './components/Chatbot';
import NotificationBox from './components/NotificationBox';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyVaccine />} />
        <Route path="/status" element={<RegistrationStatus />} />
        <Route path="/certificate" element={<VaccineCertificate />} />
        <Route path="/vaccine-card" element={<VaccineCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
