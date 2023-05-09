import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

import image1 from '../assets/images/image1.jpg';

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

            {/* <h1 className='title-h1' style={{textAlign: 'center'}}>
              Bringing the flavors of the world to your kitchen.
            </h1> */}

            <h1 className="title-h1" style={{textAlign: 'center'}}>
              The Solace Life
            </h1>

            <h4
              className="title-h1"
              style={{textAlign: 'center', fontSize: '1rem'}}
            >
              Eat Healthy - Stay Happy
            </h4>

          </div>

          <div className="image-wrapper1">

            <div style={{height:"-webkit-fill-available"}} class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/YIsEYluQaLk"
                title="YouTube video"
                // allowfullscreen
                allowFullScreen
              />
            </div>

            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YIsEYluQaLk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            /> */}

            {/* <div className="ui card" style={{width:"auto"}}>
              <div className="image">
                <img src={image1} />
              </div>
              <div className="content">
                <div className="header">Mitzi F.</div>
                <div className="meta"><span className="date"> Unleash the possibilities!</span></div>
                <div className="description">
                Bringing the flavors of the world to your kitchen.
                </div>
              </div>
              <div className="extra content">
                <a><i aria-hidden="true" className="user icon" />5022 Friends</a>
              </div>
            </div> */}

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
