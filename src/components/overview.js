import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import {main} from '../styles/main.css';
import image1 from '../assets/images/image1.jpg';

const Overview = () => {
  return (
    <header className="menu-landing" style={{}}>


   

      {/* ### */}

      <h1 style={{textAlign:"center", marginTop:"20px"}}> Overview </h1>

    

      <div style={{display: 'flex', marginTop: '20px'}} className="menu-row">

        <div className="ui card" style={{margin: 'auto'}}>
          <div className="image"><img src={image1} /></div>
          <div className="content">
            <div className="header">Matthew</div>
            <div className="meta"><span className="date">Joined in 2015</span></div>
            <div className="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div className="extra content">
            <a><i aria-hidden="true" className="user icon" />22 Friends</a>
          </div>
        </div>

        <div className="ui card" style={{margin: 'auto'}}>
          <div className="image"><img src={image1} /></div>
          <div className="content">
            <div className="header">Matthew</div>
            <div className="meta"><span className="date">Joined in 2015</span></div>
            <div className="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div className="extra content">
            <a><i aria-hidden="true" className="user icon" />22 Friends</a>
          </div>
        </div>

      </div>

      {/* ### */}
      {/* <div style={{height:"100vh"}}>
        <div className="ui top attached tabular menu">
          <a className="active item">Bio</a>
          <a className="item">Photos</a>
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input type="text" placeholder="Search users..." />
                <i aria-hidden="true" className="search link icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="ui bottom attached segment">
          <img src={image1} />
        </div>
      </div> */}

      {/* ### */}

      {/* ## */}

      <section className="section-center hero-center">
        <article className="menu-info">
          <div>

            <div
              className="center"
              style={{display: 'flex', justifyContent: 'center'}}
            />

            <div className="social-links" />

          </div>
        </article>

        <div className="menu-article" />

      </section>
    </header>
  );
};

export default Overview;
