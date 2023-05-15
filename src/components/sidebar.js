import React from 'react';
import links from '../constans/links-sidemenu';
import socialLinks from '../constans/social_links';
import {Link} from 'gatsby';

// ###close
import {FaTimes} from 'react-icons/fa';

// import hero from "../assets/images/hero.svg"

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div
        className="side-container"
        style={{marginTop: '-200px', width: '100%'}}
      >

        {/* <img src="../assets/images/hero.svg"  className="about-img-svg" /> */}

        {/* <div 
      
      style={{display:"flex", justifyContent:"center"}}
      
      className="sidebar-div">

      <img 
      
      style={{width:"50%"}}
      
      src={hero} alt="web dev" />

      </div> */}

      <div className="sidebar-social-links-margin">

        <ul className={isOpen ? 'sidebar-links' : null}>
          {links.map (link => {
            return (
              <li style={{}} key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>

        <div className="sidebar-social-links-margin">

          <ul className={isOpen ? 'social-links sidebar-icons' : null}>
            {socialLinks.map (link => {
              return (
                <li key={link.id}>
                  <a href={link.url} className="social-link">
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>

        </div>
        {/* <div className="sidebar-social-links">

          <span><FaFacebookSquare /></span>
          <span><FaInstagram /></span>
          

        </div>

        <div className="sidebar-social-links">

          
          <span><FaTiktok /></span>
          <span><FaYoutube /></span>

        </div> */}

      </div>
    </aside>
  );
};

export default Sidebar;
