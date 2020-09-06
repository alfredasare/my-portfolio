import React from "react"
import { ImageWrapper, LoaderWrapper } from "./loader.styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

const Loader = () => {

  const data = useStaticQuery(graphql`
      query {
          logo: file(relativePath: { eq: "brand.png"}) {
              childImageSharp {
                  fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (
    <LoaderWrapper>
      <ImageWrapper>
        <Img fluid={data.logo.childImageSharp.fluid} />
      </ImageWrapper>
    </LoaderWrapper>
  )
}

export default Loader
