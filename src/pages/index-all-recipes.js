import React, {useState} from 'react';

import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import {use} from '../styles/main-use.css';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import ArticlesGrid from '../components/article-grid-index';

import Layout from '../components/layout';


// ###

const AllRecipes = () => {
  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`


  



  query {
    allStrapiArticle {
      nodes {
        ...ArticleCard
      }
    }
    strapiGlobal {
      siteDescription
      siteName
    }
  }
`)






  return (

    <Layout>
      

    <header className="menu-landing" style={{}}>

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

      <h1
        style={{
          textAlign: 'center',
          // marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          fontFamily: 'Lobster',
          fontSize: '3rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Index - Recipes{' '}
      </h1>

      <ArticlesGrid articles={allStrapiArticle.nodes} />

      <div
        class="ui breadcrumb"
        style={{
          display: 'flex',
          justifyContent: 'center',
          // marginBottom: '50px',
          marginTop: '50px',
        }}
      >
        <a class="section" href="/web-development">News</a>

        <div class="divider">/</div>
        <a class="section" href="/web-design">About</a>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Index</div>

      </div>

    </header>

    </Layout>

  );
};

export default AllRecipes;