import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright @ 2024, Crypto Radar - All Rights Reserved</p>
      <br />
      <p>Made by <Link to='https://github.com/an1sshhh'>Anish ❤️</Link></p>
    </div>
  );
}

export default Footer;
