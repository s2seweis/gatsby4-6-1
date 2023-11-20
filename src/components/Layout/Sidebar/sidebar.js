import React from 'react';
import links from '../../../constans/links-sidemenu';
import socialLinks from '../../../constans/social_links';
import {Link} from 'gatsby';
import {FaTimes} from 'react-icons/fa';

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button className="close-btn" alt="close" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div
        className="side-container"
        style={{marginTop: '60px', width: '100%'}}
      >
        <div className="sidebar-social-links-margin" style={{marginTop:"auto"}}>
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
        <div className="sidebar-social-links-margin" style={{marginTop:"30px"}}>
          <ul className={isOpen ? 'social-links sidebar-icons' : null}>
            {socialLinks.map (link => {
              return (
                <li key={link.id}>
                  <a aria-label="link" href={link.url} className="social-link">
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div> 
      </div>
    </aside>
  );
};

export default Sidebar;