import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import BlocksRenderer from '../components/blocks-renderer';
import Headings from '../components/headings';

const AboutPage = () => {
  const {strapiAbout} = useStaticQuery (graphql`
    query {
      strapiAbout {
        title
        blocks {
          ...Blocks
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

      <div style={{marginTop: '20px'}}>
        <a
          style={{
            fontSize: '1.3rem',
            padding: '5px',
            marginLeft: '20px',
          }}
          href="javascript:history.back()"
        >
          <button type="button" class="btn btn-link">Go Back</button>
        </a>
      </div>

      <Seo seo={seo} />
      <Headings title={strapiAbout.title} />
      <BlocksRenderer blocks={blocks} />
    </Layout>
  );
};

export default AboutPage;
