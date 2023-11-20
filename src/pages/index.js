import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import HeroElementOne from '../components/HeroElements/HeroElementOne';
import HeroElementTwo from '../components/HeroElements/HeroElementTwo';
import ElementFive from '../components/ElementFive/ElementFive';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElementThree from '../components/ElementThree/ElementThree';
import ElementFour from '../components/ElementFour/ElementFour';
import ElementTwo from '../components/ElementTwo/ElementTwo';

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
      <HeroElementOne />
      <HeroElementTwo />
      <ElementTwo />
      <ElementThree />
      <ElementFour />
      <ElementFive />
    </Layout>
  );
};

export default IndexPage;