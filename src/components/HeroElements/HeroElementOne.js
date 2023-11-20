import React from 'react';
// import {Link} from 'gatsby';
import {use} from '../../styles/main-use.css';

const HeroElementOne = () => {
  return (
    <header className="hero" style={{}}>
      <section className="section-center hero-center">
        <article className="hero-info" style={{}}>
          <div className="hero-grid">
            <div className="hero-article">
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
          </div>
          <div className="hero-grid">
            <div className="hero-youtube">
            <div
              style={{height: '-webkit-fill-available'}}
              className="ratio ratio-16x9"
            >
              <iframe
                src="https://www.youtube.com/embed/YIsEYluQaLk"
                title="YouTube video"
                allowFullScreen
              />
            </div>
            </div>
          </div>
        </article>
        <div className="hero1">
          <div className="article1">
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
            <div
              style={{height: '-webkit-fill-available'}}
              className="ratio ratio-16x9"
            >
              <iframe
                src="https://www.youtube.com/embed/YIsEYluQaLk"
                title="YouTube video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroElementOne;