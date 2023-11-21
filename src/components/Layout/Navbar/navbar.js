import React from 'react';
import logo5 from '../../../assets/images/logo5.png';
import {HiMenuAlt2} from 'react-icons/hi';
import pageLinks from '../../../constans/links';
import {Link} from 'gatsby';
import Sidebar from '../Sidebar/sidebar';

const Navbar = ({toggleSidebar}) => {
  return (
    <nav style={{position: 'sticky'}} className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo5} alt="web dev" />
          </a>
        </div>
        <div className="nav-title">
        <button style={{marginLeft:"15px"}} type="button" className="toggle-btn" onClick={toggleSidebar}>
            <HiMenuAlt2 />
          </button>
          <h2
            className="h2-nav-title"
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Lobster Two',
              width:"100%"
            }}
          >
            Trust in Food
          </h2>
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
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;