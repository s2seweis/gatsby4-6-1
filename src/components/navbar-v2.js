import React from 'react';
// import logo from '../assets/images/logo.svg';
import logo5 from '../assets/images/logo5.png';

// ###open
import {FaAlignRight} from 'react-icons/fa';


import pageLinks from '../constans/links';
import {Link} from 'gatsby';



const Navbar1 = ({toggleSidebar}) => {
  return (
    <nav style={{ position:"sticky"}} className="navbar">
      <div className="nav-center">
        <div className="nav-header">

          {/* <img src={logo} alt="web dev" /> */}
          <a href="/">
            <img style={{marginLeft:"20px", height:"50px"}} src={logo5} alt="web dev" />
          </a>

          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map (link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
