import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"

const BreakfastPage = ({ data }) => {
  const breakfast = data.strapiBreakfast

  const seo = {
    metaTitle: breakfast.title,
    metaDescription: breakfast.description,
    shareImage: breakfast.cover,
  }

  return (
    <Layout as="article">
      <Seo seo={seo} />
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{breakfast.title}</h1>
        <h1 className="text-3xl  text-neutral-700">Test1</h1>

        
        <p className="mt-4 text-2xl text-neutral-500">{breakfast.description}</p>


        <GatsbyImage
          image={getImage(breakfast?.cover?.localFile)}
          alt={breakfast?.cover?.alternativeText}
          className="mt-6"
        />


      </header>
      <main className="mt-8">
        <BlocksRenderer blocks={breakfast.blocks || []} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiBreakfast(slug: { eq: $slug }) {
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

export default BreakfastPage
