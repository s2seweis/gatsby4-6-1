import React from 'react';
// import {Link} from 'gatsby';
import {useStaticQuery, graphql} from 'gatsby';
import '../../styles/ElementFour.css';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const ElementFour = () => {
  const content3 = useStaticQuery (graphql`
 query {
      strapiContent3 {
        cover1 {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        cover2 {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        cover3 {
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
    <div className="content3">
      <h3
        style={{
          textAlign: 'center',
          padding: ',20px',
          fontSize: '3rem',
          fontFamily: 'Lobster Two',
          background: 'antiquewhite',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        You looking for something special?
      </h3>
      <div className="content3-grid">
        <a style={{color: 'black', display: 'contents'}} 
        href="/veggies"
        >
          <div className="content3-box1">
            <GatsbyImage
              image={getImage (content3.strapiContent3.cover1.localFile)}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'
            />
            <div
              style={{
                marginTop: '-250px',
                marginLeft: '20%',
              }}
            >
              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Veggies???
              </span>
            </div>
          </div>
        </a>
        <a style={{color: 'black', display: 'contents'}} 
        href="/spicy"
        >
          <div className="content3-box2">
            <GatsbyImage
              image={getImage (content3.strapiContent3.cover2.localFile)}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'
            />
            <div
              style={{
                marginTop: '-200px',
                marginLeft: '20%',
              }}
            >
              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Craving for something spicy???
              </span>
            </div>
          </div>
        </a>
        <a style={{color: 'black', display: 'contents'}} 
        href="/hangover"
        >
          <div className="content3-box3">
            <GatsbyImage
              image={getImage (content3.strapiContent3.cover3.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'
            />
            <div
              style={{
                marginTop: '-100px',
                marginLeft: '20%',
              }}
            >
              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Did you drunk again too much?
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className="content3-flex">
        <a style={{color: 'black', display: 'contents'}} href="/veggies">
          <div className="content3-box1-flex">
            <GatsbyImage
              image={getImage (content3.strapiContent3.cover1.localFile)}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'
            />
            <div
              className="content3-title-test"
              style={{
                marginTop: '-20%',
                marginLeft: '10%',
                height: 'fit-content',
              }}
            >
              <span
                className="content3-title"
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Veggies???
              </span>
            </div>
          </div>
        </a>
        <a style={{color: 'black', display: 'contents'}} href="/spicy">
          <div className="content3-box2-flex">
            <GatsbyImage
              image={getImage (content3.strapiContent3.cover2.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'
            />
            <div
              className="content3-title-test"
              style={{
                marginTop: '-40%',
                marginLeft: '30%',
                height: 'fit-content',
              }}
            >
              <span
                className="content3-title"
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Craving for something spicy?
              </span>
            </div>
          </div>
        </a>
        <a style={{color: 'black', display: 'contents'}} href="/hangover">
          <div className="content3-box3-flex">
            <GatsbyImage
              image={getImage (content3.strapiContent3.cover3.localFile)}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'
            />
            <div
              className="content3-title-test"
              style={{
                marginTop: '-20%',
                marginLeft: '50%',
                height: 'fit-content',
              }}
            >
              <span
                className="content3-title"
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Did you drink too much again?
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ElementFour;
