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

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom:"20px"
        }}
      >
        {' '}Overview{' '}
      </h1>

      <div
        class="ui breadcrumb"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <a class="section" href="/web-development">Breakfast</a>
        {/* <div class="active section " href="/adobe">Stack</div> */}

        <div class="divider">/</div>
        <a class="section" href="/web-design">Lunch</a>
        {/* <div class="active section " href="/adobe">Webdesign</div> */}

        <div class="divider">/</div>
        {/* <a class="section" href="/adobe">Adobe</a> */}
        <div class="active section " href="/adobe">Dinner</div>

        <div class="divider">/</div>
        {/* <a class="section" href="/adobe">Adobe</a> */}
        <div class="active section " href="/adobe">Dessert</div>

        <div class="divider">/</div>
        {/* <a class="section" href="/adobe">Adobe</a> */}
        <div class="active section " href="/adobe">Fiesta</div>

        <div class="divider">/</div>
        {/* <a class="section" href="/adobe">Adobe</a> */}
        <div class="active section " href="/adobe">Dinner</div>

      </div>

      {/* <div className="menu-box-top" style={{}}>

        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'green',
            margin: '15px auto',
          }}
          className="menu-box-middle"
        >
          Test:1
        </div>

        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'green',
            margin: '15px auto',
          }}
          className="menu-box-middle"
        >
          Test:2
        </div>

      </div> */}

      {/* ###--- */}


      

      <div style={{marginTop: '25px'}} className="menu-row">

        

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image1} /></div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header">
              Breakfast
            </div>
          </div>
        </div>

        <div
          className="ui card"
          style={{margin: '20px 20px 20px 20px', width: 'auto'}}
        >
          <div className="image"><img src={image1} /></div>
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
          <div className="image"><img src={image1} /></div>
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
          <div className="image"><img src={image1} /></div>
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
          <div className="image"><img src={image1} /></div>
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
          <div className="image"><img src={image1} /></div>
          <div className="content">
            <div style={{textAlign: 'center'}} className="header">
              Beverage
            </div>
          </div>
        </div>
      </div>

      {/* ###--- */}

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
