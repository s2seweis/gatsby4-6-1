import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  }

  return (
    <Layout as="article">
      <Seo seo={seo} />

      <a href="../">
      <button style={{background:"white", marginLeft:"50px", marginTop:"25px", padding:"5px", fontSize:"1.2rem"}}>   Back</button>
      </a>


      <header className="container max-w-4xl py-8">
        <h1 style={{textAlign:"center"}} className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        {/* <h1 className="text-3xl  text-neutral-700">Test1</h1> */}

        
        <p className="mt-4 text-2xl text-neutral-500">{article.description}</p>


        <GatsbyImage
          image={getImage(article?.cover?.localFile)}
          alt={article?.cover?.alternativeText}
          className="mt-6"
        />


      </header>
      <main style={{margin:"0px 15px 0px 15px"}} className="mt-8">
        <BlocksRenderer blocks={article.blocks || []} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      description
      blocks {
        ...Blocks
      }
      cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ArticlePage
