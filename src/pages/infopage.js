import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"

import { GatsbyImage, getImage } from "gatsby-plugin-image"


const InfoPage = () => {



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

  const {strapiInfo} = useStaticQuery(graphql`
  query {
    strapiInfo {
      title
      description
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


  const { title } = strapiInfo

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  return (
    
    <Layout >

        <div className="container max-w-4xl py-8">



      <Seo seo={seo} />
      <Headings  title={strapiInfo.title} />




      <h4
      style={{ textAlign:"center" }}
      >Test1</h4>


      <p className="line-clamp-2 mt-2 text-neutral-500"
      style={{ textAlign:"center" }}
      >
          {strapiInfo.description}
        </p>


      {/* <BlocksRenderer blocks={blocks} /> */}





      <GatsbyImage

        image={getImage(strapiInfo.image?.localFile)}
        alt={strapiInfo.image?.alternativeText}
        style={{ height: "500px", width:"300px", marginLeft:"auto", marginRight:"auto", display:"block", marginTop:"50px" }}
        />




        </div>

    </Layout>
  )
}

export default InfoPage
