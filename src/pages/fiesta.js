import React from 'react';
// import {Link} from 'gatsby';
import {use} from '../styles/main-use.css';
import {useStaticQuery, graphql} from 'gatsby';
import ArticlesGrid from '../components/ArticlesGrid';
import Layout from '../components/Layout/layout';
import Seo from '../components/Seo';

const Fiesta = () => {
  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`
  query {
    allStrapiArticle(filter: {categories: {eq: "fiesta"}}) {
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

  const seo = {
    metaTitle: 'Fiesta',
    // metaDescription: "Delicious",
  };

  return (
    <Layout>
      <Seo seo={seo} />
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
            <button type="button" className="btn btn-link">Go Back</button>
          </a>
        </div>
        <h1
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            fontFamily: 'Lobster Two',
            fontSize: '3rem',
            background: 'antiquewhite',
          }}
        >
          {' '}Fiesta{' '}
        </h1>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
        <div
          className="ui breadcrumb"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            marginTop: '50px',
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

export default Fiesta;