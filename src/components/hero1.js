import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

import image1 from '../assets/images/image1.jpg';

// import {main} from '../styles/main.css';

const Hero1 = () => {
  return (
    <header className="hero" style={{}}>

      <section className="hero-level1">
      

    

      

        <div className="hero5">

        
        <div  className='h-box4'>Box1</div>
        {/* <div  className='box5'>Box2</div> */}
        <div  className='h-box6'>Box3</div>
        

        </div>

        <div className="hero6">

        
        <div  className='h-box7'>Box1</div>
        {/* <div  className='box8'>Box2</div> */}
        <div  className='h-box9'>Box3</div>
        

        </div>

      </section>
    </header>
  );
};

export default Hero1;
