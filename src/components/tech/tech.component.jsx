import React, { useEffect } from "react"
import { gsap, Power4 } from "gsap"
import {
  InnerTechContainer,
  SmallTechHead,
  TechContainer,
  TechGrid,
  TechHead,
  TechItem, TechItemText,
  TechParagraph
} from "./tech.styles"
import {
  Css,
  Firebase,
  GatsbyJS,
  GraphQL,
  Html,
  Js,
  NodeJS,
  ReactIcon,
  Redux,
  Sagas,
  Sass,
  WS,
  XD
} from "../icons/icons.component"

const Tech = () => {

  useEffect(() => {

    gsap.from(".small-tech-head", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".small-tech-head"
      },
      ease: Power4.easeInOut
    })

    gsap.from(".tech-head", {
      duration: 1.2,
      opacity: 0,
      ease: Power4.easeInOut,
      scrollTrigger: {
        trigger: ".tech-head"
      },
    })

    gsap.from(".tech-paragraph", {
      duration: 1.3,
      opacity: 0,
      ease: Power4.easeInOut,
      scrollTrigger: {
        trigger: ".tech-paragraph"
      }
    })

    gsap.from(".tech-stack", {
      duration: 1.4,
      opacity: 0,
      y: 40,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: ".tech-stack"
      }
    });
  }, [])

  return (
    <TechContainer className="tech-container">
      <InnerTechContainer>
        <SmallTechHead className="small-tech-head">Technologies</SmallTechHead>
        <TechHead className="tech-head">Languages and tools I use</TechHead>
        <TechParagraph className="tech-paragraph">
          I have used a number of tools, frameworks and languages for a variety
          of projects in my years of experience but here is a selection of
          relevant technologies I have experience with:
        </TechParagraph>
        <TechGrid className="tech-stack">
          <TechItem>
            <Html/>
            <TechItemText>HTML 5</TechItemText>
          </TechItem>
          <TechItem>
            <Css/>
            <TechItemText>CSS 3</TechItemText>
          </TechItem>
          <TechItem>
            <Js/>
            <TechItemText>JAVASCRIPT</TechItemText>
          </TechItem>
          <TechItem>
            <ReactIcon/>
            <TechItemText>REACT</TechItemText>
          </TechItem>
          <TechItem>
            <Firebase/>
            <TechItemText>FIREBASE</TechItemText>
          </TechItem>
          <TechItem>
            <GraphQL/>
            <TechItemText>GRAPHQL</TechItemText>
          </TechItem>
          <TechItem>
            <GatsbyJS/>
            <TechItemText>GATSBYJS</TechItemText>
          </TechItem>
          <TechItem>
            <NodeJS/>
            <TechItemText>NODEJS</TechItemText>
          </TechItem>
          <TechItem>
            <Redux/>
            <TechItemText>REDUX</TechItemText>
          </TechItem>
          <TechItem>
            <Sagas/>
            <TechItemText>REDUX SAGA</TechItemText>
          </TechItem>
          <TechItem>
            <WS/>
            <TechItemText>WEBSTORM</TechItemText>
          </TechItem>
          <TechItem>
            <XD/>
            <TechItemText>ADOBE XD</TechItemText>
          </TechItem>
          <TechItem>
            <Sass/>
            <TechItemText>SASS</TechItemText>
          </TechItem>
        </TechGrid>
      </InnerTechContainer>
    </TechContainer>
  )
}

export default Tech