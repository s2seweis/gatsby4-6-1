import React from 'react';
import {FaFacebookSquare, FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date ().getFullYear ();

  return (
    <footer style={{color: 'white'}} className="footer-blog">
      <div className="container-footer">
        <div className="footer-e1">
          {/* <a className="footer-e1-a" style={{}} href="/copyright">
            Copyright SWT
          </a> */}
        </div>
        <div className="footer-e2">
          <a className="footer-e1-a" style={{}} href="/about">About</a>
        </div>
        <div className="footer-e3">
          <a className="footer-e1-a" style={{}} href="/contact">Contact</a>
        </div>
      </div>
      <div className="container-footer-row2">
        <div className="footer-e1-row2">
          <a
            aria-label="link"
            href="https://www.facebook.com"
            className="link-social-desktop"
          >
            <span><FaFacebookSquare /></span>
          </a>
          <a
            aria-label="link"
            href="https://www.instagram.com/"
            className="link-social-desktop"
          >
            <span><FaInstagram /></span>
          </a>
          <a
            aria-label="link"
            href="https://www.tiktok.com/en/"
            className="link-social-desktop"
          >
            <span><FaTiktok /></span>
          </a>
          <a
            aria-label="link"
            href="https://www.tiktok.com/en/"
            className="link-social-desktop"
          >
            <span><FaYoutube /></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;