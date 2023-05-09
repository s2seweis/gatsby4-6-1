import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import ArticlesGrid from '../components/articles-grid';
import Seo from '../components/seo';
import Headings from '../components/headings';


import Hero from '../components/hero';


import Grid from '../components/grid';

import 'semantic-ui-css/semantic.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Overview from '../components/overview'




const IndexPage = () => {
  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `);

  return (
    <Layout>

      <Seo seo={{metaTitle: 'Home'}} />

      <Hero />

      <Overview/>

      <Grid/>

      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />

      {/* <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main> */}


    </Layout>
  );
};

export default IndexPage;
