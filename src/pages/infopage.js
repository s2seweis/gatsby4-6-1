import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import Seo from "../components/Seo"
import Headings from "../components/Layout/headings"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const InfoPage = () => {

  const { strapiInfo } = useStaticQuery(graphql`
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
      <div style={{ marginTop: '20px' }}>
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
      <div className="container max-w-4xl py-8">
        <Seo seo={seo} />
        <Headings title={strapiInfo.title} />
        <h4
          style={{ textAlign: "center" }}
        >Test1</h4>
        <p className="line-clamp-2 mt-2 text-neutral-500"
          style={{ textAlign: "center" }}
        >
          {strapiInfo.description}
        </p>
        <GatsbyImage
          className="infopage-12"
          image={getImage(strapiInfo.image?.localFile)}
          alt={strapiInfo.image?.alternativeText}
          style={{ height: "500px", width: "300px", marginLeft: "auto", marginRight: "auto", display: "block", marginTop: "50px" }}
        />
      </div>
    </Layout>
  )
}

export default InfoPage