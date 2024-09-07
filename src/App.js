// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout'; // Import the new MainLayout component
import Home from './pages/Home';
import ApplyVaccine from './pages/ApplyVaccine';
import RegistrationStatus from './pages/RegistrationStatus';
import VaccineCertificate from './pages/VaccineCertificate';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes that need Header, Footer, NotificationBox, and ChatBot */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/apply" element={<ApplyVaccine />} />
          <Route path="/status" element={<RegistrationStatus />} />
          <Route path="/certificate" element={<VaccineCertificate />} />
        </Route>
        {/* Routes that should not have Header, Footer, NotificationBox, and ChatBot */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
