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
          marginBottom: '20px',
          fontFamily: 'Lobster',
          fontSize: '3rem',
          background: 'antiquewhite',
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

        <a style={{ color:"black"}} href="/breakfast">

          <div className="ui-card" style={{width: 'auto'}} href="/breakfast">
            <div className="container-img">
              <img className="image-overview" src={image20} />
            </div>
            <div style={{}} className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Breakfast
              </div>
            </div>
          </div>
        </a>

        <a style={{ color:"black"}} href="/breakfast">
          <div className="ui-card" style={{width: 'auto'}}>
            <div className="container-img">
              <img className="image-overview" src={image21} />
            </div>
            <div className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Lunch
              </div>
            </div>
          </div>
        </a>


        <a style={{ color:"black"}} href="/breakfast">
        <div
          className="ui-card"
          style={{ width: 'auto'}}
        >
          <div className="container-img">
            <img className="image-overview" src={image22} />
          </div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header-overview">
              Dinner
            </div>
          </div>
        </div>
        </a>


      </div>
      

      {/* ###--- */}

      <div style={{marginTop: '25px'}} className="menu-row">


      <a style={{ color:"black"}} href="/breakfast">
        <div
          className="ui-card"
          style={{ width: 'auto'}}
        >
          <div className="container-img">
            <img className="image-overview" src={image23} />
          </div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header-overview">
              Desserts
            </div>
          </div>
        </div>
        </a>

        <a style={{ color:"black"}} href="/breakfast">
        <div
          className="ui-card"
          style={{ width: 'auto'}}
        >
          <div className="container-img">
            <img className="image-overview" src={image24} />
          </div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header-overview">
              Fiesta
            </div>
          </div>
        </div>
        </a>

        <a style={{ color:"black"}} href="/breakfast">
        <div
          className="ui-card"
          style={{ width: 'auto'}}
        >
          <div className="container-img">
            <img className="image-overview" src={image25} />
          </div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header-overview">
              Beverage
            </div>
          </div>
        </div>
        </a>
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
