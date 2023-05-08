import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {main} from '../components/main.css';

// import {main} from '../styles/main.css';
import image1 from '../assets/images/image1.jpg';

const Overview = () => {
  return (
    <header className="menu-landing" style={{}}>

      <h1 style={{textAlign:"center", fontSize:"3rem"}}>Categories</h1>

      <div style={{display:"flex", justifyContent:"center"}} class="ui breadcrumb">
        <a class="section">Breakfast</a>
        <div class="divider">/</div>
        <a class="section">Lunch</a>
        <div class="divider">/</div>
        <a class="section">Dinner</a>
        <div class="divider">/</div>
        <a class="section">Dessert</a>
        <div class="divider">/</div>
        <a class="section">Fiesta</a>
        <div class="divider">/</div>
        <div class="active section">Drinks</div>
        
      </div>

      {/* ### */}

      <div style={{display:"flex", marginTop:"20px"}} className="menu-row">

        <div class="ui card" style={{margin:"auto"}}>
          <div class="image"><img src={image1} /></div>
          <div class="content">
            <div class="header">Matthew</div>
            <div class="meta"><span class="date">Joined in 2015</span></div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
            <a><i aria-hidden="true" class="user icon" />22 Friends</a>
          </div>
        </div>

        <div class="ui card" style={{margin:"auto"}}>
          <div class="image"><img src={image1} /></div>
          <div class="content">
            <div class="header">Matthew</div>
            <div class="meta"><span class="date">Joined in 2015</span></div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
            <a><i aria-hidden="true" class="user icon" />22 Friends</a>
          </div>
        </div>

        

      </div>

      <div style={{display:"flex", marginTop:"20px"}} className="menu-row">

        <div class="ui card" style={{margin:"auto"}}>
          <div class="image"><img src={image1} /></div>
          <div class="content">
            <div class="header">Matthew</div>
            <div class="meta"><span class="date">Joined in 2015</span></div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
            <a><i aria-hidden="true" class="user icon" />22 Friends</a>
          </div>
        </div>

        <div class="ui card" style={{margin:"auto"}}>
          <div class="image"><img src={image1} /></div>
          <div class="content">
            <div class="header">Matthew</div>
            <div class="meta"><span class="date">Joined in 2015</span></div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
            <a><i aria-hidden="true" class="user icon" />22 Friends</a>
          </div>
        </div>

        

      </div>

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
