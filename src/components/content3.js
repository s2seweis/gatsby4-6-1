import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import {main} from '../styles/main.css';
import image1 from '../assets/images/image1.jpg';

const Content3 = () => {
  return (
    <div className="content3" style={{}}>

      <div
        className="content3-level2"
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '350px',
          backgroundColor: 'darkolivegreen',
          position: 'relative',
        }}
      >
        <div
          className="content3-level3"
          style={{
            background: 'white',
            width: '90%',
            height: '90%',
            position: 'absolute',
            top: '5%',
            left: '5%',
            margin: '0px 0px 0px 0px',
          }}
        />
      </div>

    </div>
  );
};

export default Content3;
