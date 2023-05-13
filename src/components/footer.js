import React from 'react';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date ().getFullYear ();

  return (
    <footer
      style={{background: 'darkolivegreen', color: 'white'}}
      className="footer-blog"
    >
      <div className="container-footer">

        <div className="footer-e1">

          <p>
            Copyright SWT
          </p>

        </div>

        <div className="footer-e2">
          <p>About</p>
        </div>

        <div className="footer-e3">
          <p>Contact</p>
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
