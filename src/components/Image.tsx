import React from "react"
import { useStaticQuery, graphql } from "gatsby" // https://www.gatsbyjs.org/docs/use-static-query/
import Img, { FluidObject } from "gatsby-image" // https://gatsby.dev/gatsby-image

interface Astronaut {
  astronaut: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const Image = () => {
  const data = useStaticQuery<Astronaut>(graphql`
    query {
      astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.astronaut.childImageSharp.fluid} />
}

export default Image
