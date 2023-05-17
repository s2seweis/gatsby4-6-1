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
              {/* <a style={{color: 'black'}} href="https://www.facebook.com">
                <span><FaFacebookSquare /></span>
              </a>
              <a style={{color: 'black'}} href="https://www.instagram.com">
                <span><FaInstagram /></span>
              </a>
              <a style={{color: 'black'}} href="https://tiktok.com">

                <span><FaTiktok /></span>
              </a>
              <a
                style={{color: 'black'}}
                href="https://www.youtube.com/@Thesolacelife"
              >

                <span><FaYoutube /></span>
              </a> */}

            </div>
            {' '}
          </div>
          <div className="e2-box2" style={{padding: '15px'}}>

            <p className='e2-text-p2'
              style={{
                textAlign: 'center',
                // fontSize: '2rem',
                fontFamily: 'Lobster',
                marginTop: '20px',
              }}
            >
              Welcome to my food blog
            </p>

            <div
              className="e2-text"
              style={{
                margin: 'auto',
                height: '60%',
                alignItems: 'center',
                display: 'grid',
                // fontSize: '1.2rem',
                padding: '20px',
                fontFamily: 'Lobster',
              }}
            >

              <p className="e2-text-p1" style={{}}>
                where I share my passion for cooking and all things food-related! My name is Mitzi Falmarin, and I'm thrilled to have you here.
                {' '}
              </p>

              <div
                style={{
                  display: 'flex',
                  fontSize: '2rem',
                  justifyContent: 'space-around',
                }}
                className="flex-social-links"
              >

                <a style={{color: 'black'}} href="https://www.facebook.com">
                  <span><FaFacebookSquare /></span>
                </a>
                <a style={{color: 'black'}} href="https://www.instagram.com">
                  <span><FaInstagram /></span>
                </a>
                <a style={{color: 'black'}} href="https://www.tiktok.com">
                  <span><FaTiktok /></span>
                </a>
                <a
                  style={{color: 'black'}}
                  href="https://www.youtube.com/@Thesolacelife"
                >
                  <span><FaYoutube /></span>
                </a>

              </div>
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
              <a style={{color: 'black'}} href="https://www.facebook.com">
                <span><FaFacebookSquare /></span>
              </a>
              <a style={{color: 'black'}} href="https://www.instagram.com">
                <span><FaInstagram /></span>
              </a>
              <a style={{color: 'black'}} href="https://www.tiktok.com">
                <span><FaTiktok /></span>
              </a>
              <a
                style={{color: 'black'}}
                href="https://www.youtube.com/@Thesolacelife"
              >
                <span><FaYoutube /></span>
              </a>

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
