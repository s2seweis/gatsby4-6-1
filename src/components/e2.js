import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

import image1 from '../assets/images/image1.jpg';

// import {main} from '../styles/main.css';

const E2 = () => {
  return (
    <header className="e2" style={{}}>

      <section className="e2-level1">

        <div className="e2-grid">

          {/* <h1>E2</h1> */}

          <div className="e2-box1">
            {' '}
            <div
              style={{marginTop: '100%', textAlign: 'center', display:"flex", justifyContent:"center"}}
              className="e2-box-social-links"
            >
                <div>Box:1</div>
                <div>Box:2</div>
                <div>Box:3</div>
              
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

          <div className="e2-box1-flex">Box:1</div>
          <div className="e2-box2-flex">Box:1</div>

        </div>

      </section>
    </header>
  );
};

export default E2;
