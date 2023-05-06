import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import group from '../assets/images/group.png'

const Hero = () => {
  return (
    <header className="hero" style={{height:"100vh"}} >
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>

            <h1 style={{textAlign: 'center'}}>i'm sebastian</h1>
            <h4 style={{textAlign: 'center', color: 'white'}}>
              freelance web and mobile UI/UX Designer
            </h4>
            <div style={{margin: 'auto'}} className="underline" />

            <div
              className="center"
              style={{display: 'flex', justifyContent: 'center'}}
            >

              <Link style={{background: 'white'}} to="/infopage" className="btn">
                contact me
              </Link>

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

        <StaticImage
        style={{width:"65%", margin:"auto"}}
          src="../assets/images/group.png"
          alt="portfolio"
          className="hero-img"
        //   placeholder="blurred"
        />

        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  );
};

export default Hero;
