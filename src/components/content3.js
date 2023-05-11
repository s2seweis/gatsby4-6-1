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
          // height: '350px',
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
        ><h5>
        Welcome to my food blog, where I share my passion for cooking and all things food-related! My name is [your name], and I'm thrilled to have you here. I started this blog as a way to document my culinary adventures and share my favorite recipes with others who love to cook, eat, and explore new flavors.

        Whether you're a seasoned chef or a beginner in the kitchen, my goal is to inspire you with delicious and easy-to-follow recipes that will satisfy your taste buds and impress your guests. From quick weeknight dinners to elaborate weekend brunches, I've got you covered with a wide range of recipes that are sure to please.

        But this blog is more than just recipes. I also share tips and tricks for cooking and baking, as well as insights into the latest food trends and ingredients. So come along with me on this culinary journey, and let's explore the wonderful world of food together!
      </h5></div>


        <h5></h5>
      </div>

    </div>
  );
};

export default Content3;
