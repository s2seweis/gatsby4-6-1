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

        <div className='e2-box1'>Box:1</div>
        <div className='e2-box2'>Box:1</div>
        

        </div>

        <div className="e2-flex">

        
        {/* <h1>E2</h1> */}

        <div className='e2-box1-flex'>Box:1</div>
        <div className='e2-box2-flex'>Box:1</div>
        

        </div>

      </section>
    </header>
  );
};

export default E2;
