import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BreakfastCard = ({ breakfast }) => {
  return (
    <Link
      to={`/breakfast/${breakfast.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >



      <GatsbyImage
        image={getImage(breakfast.cover?.localFile)}
        alt={breakfast.cover?.alternativeText}
      />



      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700" style={{textAlign:"center"}}>{breakfast.title}</h3>

        {/* <h3>Test</h3> */}

        <p className="line-clamp-2 mt-2 text-neutral-500">
          {breakfast.description}
        </p>



      </div>
    </Link>
  )
}

export const query = graphql`
  fragment BreakfastCard on STRAPI_BREAKFAST {
    id
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`

export default BreakfastCard
