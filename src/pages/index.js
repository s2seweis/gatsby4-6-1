import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import Hero1 from '../components/hero1';
import Grid from '../components/grid';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from '../components/overview';
import Content3 from '../components/content3';
import E2 from '../components/e2';

import ScrollToTop from "react-scroll-to-top";

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
      <Seo 
      seo={{metaTitle: 'Home'}}
       />
      <ScrollToTop smooth color="#708d3e" style={{display:"flex", justifyContent:"center", alignItems:"center"}} />
      <Hero />
      <Hero1 />
      <E2 />
      <Overview />
      <Content3 />
      <Grid />
    </Layout>
  );
};

export default IndexPage;