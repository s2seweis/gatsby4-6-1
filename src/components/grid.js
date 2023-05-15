// import React from 'react';

import React, {useState} from 'react';

import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import {main} from '../styles/main.css';
import image1 from '../assets/images/image1.jpg';

import {Input, Menu, Segment} from 'semantic-ui-react';

// ###

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Accordion from 'react-bootstrap/Accordion';

// import Sonnet from '../../components/Sonnet';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import ArticlesGrid from '../components/articles-grid';

// ###

const Grid = () => {
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

  const [state, setState] = useState ({activeItem: 'bio'});

  const [key, setKey] = useState ('home');

  return (
    <header className="menu-landing" style={{}}>

      {/* <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          fontFamily: 'Lobster',
          fontSize:"3rem",
          background:"antiquewhite"
        }}
      >
        {' '}Our Best Recipes{' '}
      </h1>

      {/* <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey (k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Breakfast">
          <main>
            <ArticlesGrid articles={allStrapiArticle.nodes} />
          </main>
        </Tab>
        <Tab eventKey="profile" title="Lunch">
          <h2>Test2</h2>
        </Tab>
        <Tab
          eventKey="contact"
          title="Dinner"
        >
          <h2>Test3</h2>
        </Tab>
        <Tab
          eventKey="fiesta"
          title="Fiesta"
        >
          <h2>Test4</h2>
        </Tab>

      </Tabs> */}

      <ArticlesGrid articles={allStrapiArticle.nodes} />

      <div
        class="ui breadcrumb"
        style={{
          display: 'flex',
          justifyContent: 'center',
          // marginBottom: '50px',
          marginTop: "50px"
        }}
      >
        <a class="section" href="/web-development">News</a>

        <div class="divider">/</div>
        <a class="section" href="/web-design">About</a>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Index</div>

        {/* <div class="divider">/</div>
        <div class="active section " href="/adobe">Dessert</div>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Fiesta</div>

        <div class="divider">/</div>
        <div class="active section " href="/adobe">Dinner</div> */}

      </div>

      <section className="section-center hero-center">
        <article className="menu-info">
          <div>

            <div
              className="center"
              style={{display: 'flex', justifyContent: 'center'}}
            />

            <div className="social-links" />

          </div>
        </article>

        <div className="menu-article" />

      </section>
    </header>
  );
};

export default Grid;
