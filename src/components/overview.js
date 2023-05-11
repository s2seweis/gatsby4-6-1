import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import {main} from '../styles/main.css';
import image20 from '../assets/images/20.jpg';
import image21 from '../assets/images/21.jpg';
import image22 from '../assets/images/22.jpg';
import image23 from '../assets/images/23.jpg';
import image24 from '../assets/images/24.jpg';
import image25 from '../assets/images/25.jpg';

const Overview = () => {
  return (
    <header className="menu-landing" style={{}}>

      {/* ### */}

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom:"20px",
          fontFamily:"Lobster",
          fontSize:"3rem"
        }}
      >
        {' '}Overview{' '}
      </h1>

      {/* <div
        class="ui breadcrumb"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <a class="section" href="/web-development">Breakfast</a>

        <div class="divider">/</div>
        <a class="section" href="/web-design">Lunch</a>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Dinner</div>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Dessert</div>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Fiesta</div>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Dinner</div>

      </div> */}

  


      

      <div style={{marginTop: '25px'}} className="menu-row">

        

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image20} /></div>
          <div style={{}} className="content">
            <div style={{textAlign: 'center'}} className="header">
              Breakfast
            </div>
          </div>
        </div>

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image21} /></div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header">
              Lunch
            </div>
          </div>
        </div>

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image22} /></div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header">
              Dinner
            </div>
          </div>
        </div>
      </div>

      {/* ###--- */}

      <div style={{marginTop: '25px'}} className="menu-row">

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image23} /></div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header">
              Desserts
            </div>
          </div>
        </div>

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image24} /></div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header">
              Fiesta
            </div>
          </div>
        </div>

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image25} /></div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header">
              Beverage
            </div>
          </div>
        </div>
      </div>

    

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
