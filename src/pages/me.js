import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"

import { GatsbyImage, getImage } from "gatsby-plugin-image"


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

  const {strapiMe} = useStaticQuery(graphql`


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


  `)











  const { title, stack } = strapiMe
  console.log(stack);

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  return (
    
    <Layout >

        <div className="container max-w-4xl py-8">



      <Seo seo={seo} />
      <Headings  title={strapiMe.title} />




      <h4
      style={{ textAlign:"center" }}
      >Test1</h4>


      <p className="line-clamp-2 mt-2 text-neutral-500"
      style={{ textAlign:"center" }}
      >
          {strapiMe.info}
        </p>


      {/* <BlocksRenderer blocks={blocks} /> */}





        <GatsbyImage

        image={getImage(strapiMe.image?.localFile)}
        alt={strapiMe.image?.alternativeText}
        style={{ height: "500px", width:"300px", marginLeft:"auto", marginRight:"auto", display:"block", marginTop:"50px" }}
        />  

            <div 
            
            style={{ 

display:"inline-block", margin:"0.25rem", padding:"0.25rem 0.5rem", background:"red", color:"white"



             }}

            
            >
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>




        </div>

    </Layout>
  )
}

export default Me
