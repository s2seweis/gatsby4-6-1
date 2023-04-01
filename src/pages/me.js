import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import BlocksRenderer from '../components/blocks-renderer';
import Headings from '../components/headings';

import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const Me = () => {
  //   const { strapiAbout } = useStaticQuery(graphql`
  //     query {
  //       strapiAbout {
  //         title
  //         blocks {
  //           ...Blocks
  //         }
  //       }
  //     }
  //   `)

  const {strapiMe} = useStaticQuery (graphql`


  query {
      strapiMe {
        title
        info
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }


  `);

  const {title, stack} = strapiMe;
  console.log (stack);

  const seo = {
    metaTitle: title,
    metaDescription: title,
  };

  return (
    <Layout>

      <div className="container max-w-4xl py-8">

        <Seo seo={seo} />

        
        <Headings  title={strapiMe.title} />

<div className='test100'>

        <h4  style={{textAlign: 'center'}}>Test1</h4>

</div>


  <div className='image-des'
  
  style={{display:"flex", alignItems:"center"}}

  
  >

            <GatsbyImage

            image={getImage(strapiMe.image?.localFile)}
            // alt={strapiMe.image?.alternativeText}


            style={{ 

            // height: "500px", 
            // width:"300px", 
            width:"100rem",
            marginLeft:"auto", 
            marginRight:"50px", 
            display:"block", 
            // marginTop:"50px",
            borderRadius:"10px",


            }}


            />  


        <p
          className="line-clamp-2 mt-2 text-neutral-500"
          style={{textAlign: 'center', display:"contents", overflow:"visible", marginTop:"20px"}}
          >
          {strapiMe.info}
        </p>

        {/* <BlocksRenderer blocks={blocks} /> */}




  </div>


        <div
          style={{
            textAlign: 'center',
          }}
        >
          {stack.map (item => {
            return (
              <span
                style={{
                  display: 'inline-block',
                  background: 'skyblue',
                  color: 'var(--clr-grey-5)',
                  margin: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius)',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  borderRadius: '10px',
                  opacity: '0.8',
                }}
                key={item.id}
              >
                {item.title}
              </span>
            );
          })}
        </div>

      </div>

    </Layout>
  );
};

export default Me;
