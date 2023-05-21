import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import image1 from '../assets/images/image1.jpg';

// import {main} from '../styles/main.css';

const Hero1 = () => {
  return (
    <header className="hero" style={{}}>

      <section className="hero-level1">

        <div className="hero5">

          <a style={{color: 'black', display: 'contents'}} href="/article/pork-adobe">
            <div className="h-box4"  alt="Food Blog" style={{backgroundImage:"url(https://food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com/30_445a4c554b.webp)"}}
 >


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
                  Best Pork Adobe Recipe!
                </span>
              </div>
            </div>
          </a>

          <a style={{color: 'black', display: 'contents'}} href="/veggies">

            <div className="h-box6" alt="Food Blog" style={{backgroundImage:"url(https://food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com/31_2891c5c0ca.webp)"}} >



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
                  Delicious Veggie Bowl.
                </span>
              </div>
            </div>

          </a>

        </div>

        <div className="hero6">

          <a style={{color: 'black', display: 'contents'}} href="/veggies">

            <div className="h-box7" alt="Food Blog" style={{backgroundImage:"url(https://food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com/32_987e7e0ab4.webp)"}} >
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
                  Tiktok - Halo Halo.
                </span>
              </div>
            </div>

          </a>

          {/* <div  className='box8'>Box2</div> */}

          <a style={{color: 'black', display: 'contents'}} href="/veggies">

            <div className="h-box9" alt="Food Blog" style={{backgroundImage:"url(https://food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com/33_0c39b80c31.webp)"}} >
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
                  Mouth Watering Fiesta.
                </span>
              </div>
            </div>

          </a>

        </div>

      </section>
    </header>
  );
};

export default Hero1;
