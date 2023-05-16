import React, {useState} from 'react';

import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import {use} from '../styles/main-use.css';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import ArticlesGrid from '../components/articles-grid';

// ###

const Grid = () => {
  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`


  



  query {
    allStrapiArticle(filter: {categories: {eq: "breakfast"}}) {
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
    <header className="menu-landing" style={{}}>

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          fontFamily: 'Lobster',
          fontSize: '3rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Our Best Recipes{' '}
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
  );
};

export default Grid;
