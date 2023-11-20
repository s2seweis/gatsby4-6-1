import React, {useState, useEffect, useRef} from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import Navbar1 from './Navbar/navbar-v2';
import Sidebar from './Sidebar/sidebar';
import CookieConsent from 'react-cookie-consent';
// import {FaFacebookSquare, FaInstagram, FaYoutube} from 'react-icons/fa';
import SocialMedia from './SocialMedia/SocialMedia';

const Layout = ({children}) => {
  const scrolled = useRef (null);

  useEffect (() => {
    const headID = document.getElementsByTagName ('head')[0];

    document.addEventListener ('scroll', function (e) {
      if (!scrolled.current) {
        scrolled.current = true;
        const gaScript = document.createElement ('script');
        gaScript.async = true;
        gaScript.crossorigin = 'anonymous';
        gaScript['data-ad-client'] = '5912939817167412';
        gaScript.src =
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        gaScript.type = 'text/javascript';
        headID.appendChild (gaScript);
      }
    });
  }, []);

  const [isOpen, setIsOpen] = useState (false);

  const toggleSidebar = () => {
    setIsOpen (!isOpen);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <SocialMedia/>
      <div>
        <CookieConsent
          location="bottom"
          buttonText="I Accept It"
          cookieName="myAwesomeCookieName2"
          style={{background: '#708d3e'}}
          buttonStyle={{color: '#4e503b', fontSize: '13px'}}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{' '}
          <span style={{fontSize: '10px'}}>
            <div style={{marginTop: '20px'}}>
              <a
                style={{
                  fontSize: '1.3rem',
                  padding: '5px',
                  marginLeft: '20px',
                }}
                href="javascript:history.back()"
              >
                <button type="button" className="btn btn-link">Go Back</button>
              </a>
            </div>
          </span>
        </CookieConsent>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Navbar1 toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;