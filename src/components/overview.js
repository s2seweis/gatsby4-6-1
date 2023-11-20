import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { use } from '../styles/main-use.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Overview = () => {
  const overview = useStaticQuery(graphql`
  query {
    strapiOverview {
      breakfast {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      lunch {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      dinner {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      desserts {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      fiesta {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      beverage {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`);

  return (
    <header className="menu-landing" style={{}}>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          fontFamily: 'Lobster Two',
          fontSize: '3rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Overview{' '}
      </h1>
      <div style={{ marginTop: '25px' }} className="menu-row">
        <a
          aria-label="breakfast"
          style={{ color: 'black', textDecoration: 'none' }}
          href="/breakfast"
        >
          <div className="ui-card" style={{ width: 'auto' }} href="/breakfast">
            <div className="container-img">
              <GatsbyImage
                className="image-overview"
                image={getImage(overview.strapiOverview.breakfast.localFile)}
                style={{}}
                alt='The Solace Life'
              />
            </div>
            <div style={{}} className="content">
              <div style={{ textAlign: 'center' }} className="header-overview">
                Breakfast
              </div>
            </div>
          </div>
        </a>
        <a
          aria-label="lunch"
          style={{ color: 'black', textDecoration: 'none' }}
          href="/lunch"
        >
          <div className="ui-card" style={{ width: 'auto' }}>
            <div className="container-img">
              <GatsbyImage
                className="image-overview"
                image={getImage(overview.strapiOverview.lunch.localFile)}
                style={{}}
                alt='Food Blog'
              />
            </div>
            <div className="content">
              <div style={{ textAlign: 'center' }} className="header-overview">
                Lunch
              </div>
            </div>
          </div>
        </a>
        <a
          aria-label="dinner"
          style={{ color: 'black', textDecoration: 'none' }}
          href="/dinner"
        >
          <div className="ui-card" style={{ width: 'auto' }}>
            <div className="container-img">
              <GatsbyImage
                className="image-overview"
                image={getImage(overview.strapiOverview.dinner.localFile)}
                style={{}}
                alt='Food Blog'
              />
            </div>
            <div className="content">
              <div style={{ textAlign: 'center' }} className="header-overview">
                Dinner
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        style={{
          marginTop: '15px',
        }}
        className="menu-row"
      >
        <a
          aria-label="link"
          style={{ color: 'black', textDecoration: 'none' }}
          href="/dessert"
        >
          <div className="ui-card" style={{ width: 'auto' }}>
            <div className="container-img">
              <GatsbyImage
                className="image-overview"
                image={getImage(overview.strapiOverview.desserts.localFile)}
                style={{}}
                alt='Food Blog'
              />
            </div>
            <div className="content">
              <div style={{ textAlign: 'center' }} className="header-overview">
                Desserts
              </div>
            </div>
          </div>
        </a>
        <a
          aria-label="link"
          style={{ color: 'black', textDecoration: 'none' }}
          href="/fiesta"
        >
          <div className="ui-card" style={{ width: 'auto' }}>
            <div className="container-img">
              <GatsbyImage
                className="image-overview"
                image={getImage(overview.strapiOverview.fiesta.localFile)}
                style={{}}
                alt='Food Blog'
              />
            </div>
            <div className="content">
              <div style={{ textAlign: 'center' }} className="header-overview">
                Fiesta
              </div>
            </div>
          </div>
        </a>
        <a
          aria-label="link"
          style={{ color: 'black', textDecoration: 'none' }}
          href="/beverage"
        >
          <div className="ui-card" style={{ width: 'auto' }}>
            <div className="container-img">
              <GatsbyImage
                className="image-overview"
                image={getImage(overview.strapiOverview.beverage.localFile)}
                style={{}}
                alt='Food Blog'
              />
            </div>
            <div className="content">
              <div style={{ textAlign: 'center' }} className="header-overview">
                Beverage
              </div>
            </div>
          </div>
        </a>
      </div>
      <section className="section-center hero-center">
        <article className="menu-info">
          <div>
            <div
              className="center"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
            <div className="social-links" />
          </div>
        </article>
        <div className="menu-article" />
      </section>
    </header>
  );
};

export default Overview;
