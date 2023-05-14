import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

import image1 from '../assets/images/image1.jpg';

// import {main} from '../styles/main.css';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

const E2 = () => {
  return (
    <header className="e2" style={{}}>



      <section className="e2-level1">

        <div className="e2-grid">

          {/* <h1>E2</h1> */}

          <div className="e2-box1">
            {' '}
            <div
              style={{
                marginTop: '110%',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '2rem',
              }}
              className="<e2-box-social-links>"
            >
              <span><FaFacebookSquare /></span>
              <span><FaInstagram /></span>
              <span><FaTiktok /></span>
              <span><FaYoutube /></span>

            </div>
            {' '}
          </div>
          <div className="e2-box2" style={{padding: '15px'}}>

            <p
              style={{
                textAlign: 'center',
                fontSize: '2rem',
                fontFamily: 'Lobster',
              }}
            >
              Welcome to my food blog
            </p>

            <div
              className="e2-text"
              style={{
                margin: 'auto',
                height: '80%',
                alignItems: 'center',
                display: 'grid',
                fontSize: '1.2rem',
                padding: '20px',
              }}
            >

              <p>
                where I share my passion for cooking and all things food-related! My name is Mitzi Falmarin, and I'm thrilled to have you here.
                {' '}
              </p>
              {/* <p></p> */}

            </div>

          </div>

        </div>

        <div className="e2-flex">

          {/* <h1>E2</h1> */}

          <div className="e2-box1-flex">

            <div
              style={{
                marginTop: '100%',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                justifyContent: 'space-between',
                fontSize: '2rem',
              }}
              className="e2-box1-flex-social-links"
            >

              <span><FaFacebookSquare /></span>
              <span><FaInstagram /></span>
              <span><FaTiktok /></span>
              <span><FaYoutube /></span>

            </div>

          </div>

          <div style={{marginTop: '40px'}} className="e2-box2-flex">

            <div
              style={{margin: '0px 15px 0px 15px', background: 'antiquewhite'}}
              className="e2-box2-flex-text"
            >

              <div
                style={{
                  textAlign: 'center',
                  padding: '20px 20px 20px 20px',
                  fontSize: '2rem',
                  fontFamily: 'Lobster',
                }}
              >
                Welcome to my food blog
              </div>

              <div
                style={{
                  textAlign: 'center',
                  padding: '20px 20px 20px 20px',
                  fontSize: '1.5rem',
                  fontFamily: 'Lobster',
                }}
              >
                where I share my divassion for cooking and all things food-related! My name is Mitzi, and I'm thrilled to have you here.
              </div>

            </div>

          </div>

        </div>

      </section>
    </header>
  );
};

export default E2;
