// src/components/MainLayout.js
import React from 'react';
import Header from './WHeader';
import Footer from './WFooter';
import NotificationBox from './NotificationBox';
import Chatbot from './Chatbot';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <NotificationBox />
      <Chatbot />
      <main>
        <Outlet /> {/* This will render the routed content */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
