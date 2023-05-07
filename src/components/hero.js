import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {main} from '../components/main.css';

import group from '../assets/images/group.png'

// import {main} from '../styles/main.css';

const Hero = () => {
  return (
    <header className="hero" style={{}}>
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>

            {/* <h1 style={{textAlign: 'center'}}>i'm sebastian</h1>
            <h4 style={{textAlign: 'center', color: 'white'}}>
              freelance web and mobile UI/UX Designer
            </h4> */}
            <div style={{margin: 'auto'}} className="underline" />

            <div
              className="center"
              style={{display: 'flex', justifyContent: 'center'}}
            >

              {/* <Link style={{background: 'white'}} to="/infopage" className="btn">
                contact me
              </Link> */}

            </div>

            <div className="social-links">

              {/* {socialLinks.map (link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })} */}

            </div>

            {/* <a
              href="/files/CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download FIle
            </a> */}

          </div>
        </article>

        <div className="hero1">

          <div className="article1">

            <h1 className='title-h1' style={{textAlign: 'center'}}>
              Bringing the flavors of the world to your kitchen.
            </h1>

          </div>

          <div className="image-wrapper1">

            <div class="ui card" style={{width:"auto", marginTop:"-100px"}}>
              <div class="image">
                <img src={group} />
              </div>
              <div class="content">
                <div class="header">Matthew</div>
                <div class="meta"><span class="date">Joined in 2015</span></div>
                <div class="description">
                  Matthew is a musician living in Nashville.
                </div>
              </div>
              <div class="extra content">
                <a><i aria-hidden="true" class="user icon" />22 Friends</a>
              </div>
            </div>

            {/* <StaticImage
              style={{marginTop: '40px'}}
              src="../assets/images/group.png"
              alt="portfolio"
              className="hero-img"
            /> */}

          </div>

        </div>

        {/* <StaticImage
          style={{width: '100%', margin: 'auto', height: '91vh'}}
          src="../assets/images/group.png"
          alt="portfolio"
          className="hero-img"
        /> */}

        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  );
};

export default Hero;
