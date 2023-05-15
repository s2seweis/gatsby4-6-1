import React, {useState} from 'react';

import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import {use} from '../styles/main-use.css';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import BreakfastsGrid from '../components/breakfasts-grid';

import Layout from '../components/layout';


// ###

const Grid = () => {
  const {allStrapiBreakfast, strapiGlobal} = useStaticQuery (graphql`
  query {
    allStrapiBreakfast {
      nodes {
        ...BreakfastCard
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

      <BreakfastsGrid breakfasts={allStrapiBreakfast.nodes} />

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

export default Grid;