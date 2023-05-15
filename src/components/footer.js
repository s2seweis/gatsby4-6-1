import React from 'react';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date ().getFullYear ();

  return (
    <footer
      style={{ color: 'white'}}
      className="footer-blog"
    >
      <div className="container-footer">

        <div className="footer-e1">

          <a className='footer-e1-a' style={{}} href="/" >
            Copyright SWT
          </a>

        </div>

        <div className="footer-e2">
          <a className='footer-e1-a' style={{}} href="/about" >About</a>
        </div>

        <div className="footer-e3">
          <a className='footer-e1-a' style={{}} href="/contact" >Contact</a>
        </div>

      </div>

      <div className="container-footer-row2">

        <div className="footer-e1-row2">

          <span><FaFacebookSquare /></span>
          <span><FaInstagram /></span>
          <span><FaTiktok /></span>
          <span><FaYoutube /></span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
