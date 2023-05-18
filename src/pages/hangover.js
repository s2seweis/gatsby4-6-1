import React, {useState} from 'react';

import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import {use} from '../styles/main-use.css';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import ArticlesGrid from '../components/articles-grid';

import Layout from '../components/layout';


// ###

const Hangover = () => {
  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`


  



  query {
    allStrapiArticle(filter: {categories: {eq: "hangover"}}) {
      nodes {
        ...ArticleCard
      }
    }
    strapiGlobal {
      siteName
      siteDescription
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
          fontFamily: 'Lobster Two',
          fontSize: '3rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Hangover???{' '}
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
        <a class="section" href="/news">News</a>

        <div class="divider">/</div>
        <a class="section" href="/about">About</a>

        <div class="divider">/</div>
        <a class="section " href="/index-all-recipes">Index</a>
        {/* class="active section " */}
      </div>

    </header>

    </Layout>

  );
};

export default Hangover;