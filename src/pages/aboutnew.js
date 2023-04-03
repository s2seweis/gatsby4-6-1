import React from "react"
import { graphql } from "gatsby"
// import Title from "../components/Title"
// import Seo from "../components/Seo"

import {GatsbyImage, getImage} from 'gatsby-plugin-image';

import Layout from '../components/layout';



const AboutNew = ({ data }) => {
  console.log(data);


  const {
    strapiAboutnew: { title, image, info, stack },
  } = data


  return (
    

    <Layout>

      <section className="about-page">
        <div className="section-center about-center">






       <GatsbyImage
       className='about-img-svg'
       image={getImage(image?.localFile)}/>  





          <article className="about-text">
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                  return <span key={item.id}>{item.title}</span>
                })}
            </div>
          </article>
        </div>
      </section>
    
                </Layout>
  )
}

export const query = graphql`
  query {
    strapiAboutnew {
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
`

export default AboutNew
