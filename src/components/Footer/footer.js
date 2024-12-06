// src/components/Footer/Footer.js
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1F1F1F', color: 'white', padding: '20px 0' }}>
      <div className="container">
        <Logo />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
          <a href="/facebook" style={{ color: 'white' }}>Facebook</a>
          <a href="/instagram" style={{ color: 'white' }}>Instagram</a>
        </div>
        <hr />
        <p>© 2024 Digital Store</p>
      </div>
    </footer>
  );
};

export default Footer;
