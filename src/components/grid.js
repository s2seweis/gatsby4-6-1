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

  console.log ('line:1', state);
  console.log ('line:1.1', state.activeItem);

  const shit = state.activeItem;
  console.log ('line:1.2', shit);

  console.log ('line:2', setState);

  const handleItemClick = (e, {name}) => setState ({activeItem: name});
  console.log ('line:3', handleItemClick);

  return (
    <header className="menu-landing" style={{}}>

      {/* ### */}

      {/* <div className="menu-row"> //   style={{display: 'flex', marginTop: '20px'}}

        <div>
          <Menu attached="top" tabular>
            <Menu.Item
              name="bio"
              active={shit === 'bio'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="photos"
              active={shit === 'photos'}
              onClick={handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input
                  transparent
                  icon={{name: 'search', link: true}}
                  placeholder="Search users..."
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>

          <Segment attached="bottom">
            <img src={image1} />
          </Segment>
        </div>

      </div> */}

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          {/* <Sonnet /> */}
          <h1>Test1</h1>
          <main>
            <ArticlesGrid articles={allStrapiArticle.nodes} />
          </main>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          {/* <Sonnet /> */}
          <h2>Test2</h2>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          {/* <Sonnet /> */}
          <h3>Test3</h3>
        </Tab>
      </Tabs>

      {/* ### */}

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
