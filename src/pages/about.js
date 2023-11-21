import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/Seo';
import BlocksRenderer from '../components/Blog/blocks-renderer';
import Headings from '../components/Layout/headings';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const AboutPage = () => {
  const {strapiAbout} = useStaticQuery (graphql`
  query {
    strapiAbout {
      title
      blocks {
        ...Blocks
      }
      cover {
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

  const {title, blocks} = strapiAbout;
  const seo = {
    metaTitle: title,
    metaDescription: title,
  };

  return (
    <Layout>
      <header
        className="menu-landing"
        style={{background: 'rgb(250 250 250 / var(--tw-bg-opacity))'}}
      >
        <div style={{marginTop: '20px'}}>
          <a
            style={{
              fontSize: '1.3rem',
              padding: '5px',
              marginLeft: '20px',
            }}
            href="javascript:history.back()"
          >
            <button type="button" className="btn btn-link">Go Back</button>
          </a>
        </div>
        <Seo seo={{metaTitle: 'About'}} />
        <Headings title={strapiAbout.title} />
        <GatsbyImage
        className='image-about'
        image={getImage(strapiAbout.cover?.localFile)}
        alt={strapiAbout.cover?.alternativeText}
        style={{ margin:"auto", display:"flex", marginTop:"20px", borderRadius:"50%"  }}
        />
        <BlocksRenderer blocks={blocks} />
        <div
          className="ui breadcrumb"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            paddingBottom: '50px',
          }}
        >
          <a aria-label="link" className="section" href="/news">News</a>
          <div className="divider">/</div>
          <a aria-label="link" className="section" href="/about">About</a>
          <div className="divider">/</div>
          <a aria-label="link" className="section " href="/index-all-recipes">Index</a>
        </div>
      </header>
    </Layout>
  );
};

export default AboutPage;