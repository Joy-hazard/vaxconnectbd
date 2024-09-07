import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Correct package for faGlobe

const WFooter = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#343a40', // Dark background color
      color: '#f8f9fa', // Light text color
      padding: '1rem 2rem',
      flexWrap: 'wrap',
      textAlign: 'center'
    }}>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>
        <a href="https://www.linkedin.com/in/joypal" target="_blank" rel="noopener noreferrer" style={{ color: '#f8f9fa', marginRight: '1rem' }}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/joypal" target="_blank" rel="noopener noreferrer" style={{ color: '#f8f9fa', marginRight: '1rem' }}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.joypalportfolio.com" target="_blank" rel="noopener noreferrer" style={{ color: '#f8f9fa' }}>
          <FontAwesomeIcon icon={faGlobe} size="2x" />
        </a>
      </div>
      <p style={{ flex: '2', margin: '0' }}>&copy; 2024 vaXconnect Bangladesh | All Rights Reserved</p>
      <p style={{ flex: '1', margin: '0', textAlign: 'right' }}>Design & Developed By Joy Pal</p>
    </footer>
  );
};

export default WFooter;
