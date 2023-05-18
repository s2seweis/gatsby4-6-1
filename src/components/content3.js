import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import {main} from '../styles/main.css';
import image1 from '../assets/images/image1.jpg';

const Content3 = () => {
  return (
    <div className="content3">

      <h3
        style={{
          textAlign: 'center',
          padding: ',20px',
          fontSize: '3rem',
          fontFamily: 'Lobster Two',
          background:"antiquewhite",
          marginBottom:"20px"
        }}
      >
        You looking for something special?
      </h3>
      <div className="content3-grid">

        {/* ### */}

        <a style={{color: 'black', display: 'contents'}} href="/veggies">
          <div className="content3-box1" style={{}}>

            <div style={{marginTop: '20%', marginLeft: '20%'}}>
              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Veggies???
              </span>
            </div>

            {/* ### */}

          </div>
        </a>

        <a style={{color: 'black', display: 'contents'}} href="/spicy">
          <div className="content3-box2">
            <div style={{marginTop: '40%', marginLeft: '20%'}}>
              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Craving for something spicy?
              </span>
            </div>
          </div>
        </a>

        {/* ### */}
        <a style={{color: 'black', display: 'contents'}} href="/hangover">
        <div className="content3-box3">
          <div style={{marginTop: '70%', marginLeft: '20%'}}>
            <span
              style={{
                padding: '5px',
                background: 'white',
                fontFamily: 'Lobster Two',
                fontSize: '1.5rem',
                opacity: '0.8',
              }}
            >
              Did you drink too much again?
            </span>
          </div>
        </div>
        </a>

        {/* ### */}

      </div>

      <div className="content3-flex">

        {/* ###-Start */}
        <a style={{color: 'black', display: 'contents'}} href="/veggies">
        <div className="content3-box1-flex" style={{}}>
          <div
            className="content3-title-test"
            style={{marginTop: '10%', marginLeft: '10%', height: 'fit-content'}}
          >
            <span
              className="content3-title"
              style={{
                padding: '5px',
                background: 'white',
                fontFamily: 'Lobster Two',
                fontSize: '1.5rem',
                opacity: '0.8',
              }}
            >
              Veggies???
            </span>
          </div>
        </div>
        </a>

        {/* ### */}
        <a style={{color: 'black', display: 'contents'}} href="/spicy">
        <div className="content3-box2-flex">
          <div
            style={{marginTop: '40%', marginLeft: '10%', height: 'fit-content'}}
          >
            <span
              className="content3-title"
              style={{
                padding: '5px',
                background: 'white',
                fontFamily: 'Lobster Two',
                fontSize: '1.5rem',
                opacity: '0.8',
              }}
            >
              Craving for something spicy?
            </span>
          </div>
        </div>
        </a>

        {/* ### */}
        <a style={{color: 'black', display: 'contents'}} href="/hangover">
        <div className="content3-box3-flex">
          <div style={{marginTop: '50%', marginLeft: '10%'}}>
            <span
              className="content3-title"
              style={{
                padding: '5px',
                background: 'white',
                fontFamily: 'Lobster Two',
                fontSize: '1.5rem',
                opacity: '0.8',
              }}
            >
              Did you drink too much again?
            </span>
          </div>
        </div>
        </a>

      </div>

      {/* ###-end */}

    </div>
  );
};

export default Content3;
