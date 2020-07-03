import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { gsap, Power4 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  CTA,
  LandingGrid,
  LandingImg,
  LandingImgContainer,
  LandingIntro,
  LandingIntroText,
  LandingWrapper, Name
} from "./landing.styles"

const Landing = () => {

  let tl = gsap.timeline({
    delay: .8
  })

  useEffect(() => {

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    tl.from(".imageContainer", {
      duration: 1.2,
      y: 1280,
      ease: Power4.easeInOut
    }, "Landing")
      .from(".image", { duration: 2, scale: 1.2, ease: Power4.easeOut}, .2)

    tl.from(".intro-text", {
      opacity: 0,
      y: 60,
      ease: Power4.easeInOut,
      duration: 1
    }, "Landing").from(".cta", {
      opacity: 0,
      y: 60,
      ease: Power4.easeInOut,
      duration: 1
    }, .2)
  }, [tl])


  const data = useStaticQuery(graphql`
      query {
          alfred: file(relativePath: { eq: "alfred.png"}) {
              childImageSharp {
                  fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <LandingWrapper className="land-wrapper">
      <LandingGrid>
        <LandingIntro className="fade">
          <LandingIntroText className="intro-text">I'm <Name>Alfred Asare</Name>, a Front-end Web Developer. I enjoy
            creating clean and user-friendly web apps that give users delight and satisfaction.</LandingIntroText>
          <CTA to="/#projects" className="cta">View Projects</CTA>
        </LandingIntro>
        <LandingImgContainer className="imageContainer">
          <LandingImg className="image" fluid={data.alfred.childImageSharp.fluid}/>
        </LandingImgContainer>
      </LandingGrid>
    </LandingWrapper>
  )
}

export default Landing