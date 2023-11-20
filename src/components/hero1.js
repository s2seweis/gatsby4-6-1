import React from 'react';
// import {Link} from 'gatsby';
import {use} from '../styles/main-use.css';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const Hero1 = () => {
  const hero1 = useStaticQuery (graphql`
  query {
    strapiHero1 {
      file1 {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      file2 {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      file3 {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      file4 {
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

  console.log ('line:1000', hero1);
  console.log ('line:2000', hero1.strapiHero1.file1.localFile);

  return (
    <header className="hero" style={{}}>
      <section className="hero-level1">
        <div className="hero5">
          <a
            style={{color: 'black', display: 'contents'}}
            href="/article/pork-adobe"
          >
            <div
              className="h-box4"
              alt="Food Blog"
            >
              <GatsbyImage
                className="h-box4-1"
                image={getImage (hero1.strapiHero1.file1.localFile)}
                style={{}}
                alt='The Solace Life'
              />
              <div className='line:1' style={{marginTop: '-20%', marginLeft: '20%'}}>
                <span
                  style={{
                    padding: '5px',
                    background: 'white',
                    fontFamily: 'Lobster Two',
                    fontSize: '1.5rem',
                    opacity: '0.8',
                  }}
                >
                  Best Pork Adobe Recipe1!
                </span>
              </div>
            </div>
          </a>
          <a style={{color: 'black', display: 'contents'}} 
          href="/article/ginisang-gulay"
          >
            <div
              className="h-box6"
              alt="Food Blog"
              style={{
                background:"white"
              }}
            >
              <GatsbyImage
                className="h-box6"
                image={getImage (hero1.strapiHero1.file2.localFile)}
                style={{background:"white"}}
                alt='The Solace Life | Food Blog'
              />
              <div className='line:2' style={{marginTop: '-20%', marginLeft: '20%'}}>
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
          <a style={{color: 'black', display: 'contents'}} 
          href="/article/leche-flan"
          >
            <div
              className="h-box7"
              alt="Food Blog"
            >
              <GatsbyImage
                className="h-box7-1"
                image={getImage (hero1.strapiHero1.file3.localFile)}
                style={{}}
                alt='Food Blog'
              />
              <div style={{marginTop: '-20%', marginLeft: '20%'}}>
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
          <a style={{color: 'black', display: 'contents'}} 
          href="/article/chicken-adobo"
          >
            <div
              className="h-box9"
              alt="Food Blog"
            >
              <GatsbyImage
                className="h-box9"
                image={getImage (hero1.strapiHero1.file4.localFile)}
                style={{width:"100%"}}
                alt='Food Blog'
              />
              <div style={{marginTop: '-20%', marginLeft: '20%'}}>
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