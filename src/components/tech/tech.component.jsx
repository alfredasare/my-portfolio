import React from "react"
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
  return (
    <TechContainer>
      <InnerTechContainer>
        <SmallTechHead>Technologies</SmallTechHead>
        <TechHead>Languages and tools I use</TechHead>
        <TechParagraph>
          I have used a number of tools, frameworks and languages for a variety
          of projects in my years of experience but here is a selection of
          relevant technologies I have experience with:
        </TechParagraph>
        <TechGrid>
          <TechItem>
            <Html />
            <TechItemText>HTML 5</TechItemText>
          </TechItem>
          <TechItem>
            <Css />
            <TechItemText>CSS 3</TechItemText>
          </TechItem>
          <TechItem>
            <Js />
            <TechItemText>JAVASCRIPT</TechItemText>
          </TechItem>
          <TechItem>
            <ReactIcon />
            <TechItemText>REACT</TechItemText>
          </TechItem>
          <TechItem>
            <Firebase />
            <TechItemText>FIREBASE</TechItemText>
          </TechItem>
          <TechItem>
            <GraphQL />
            <TechItemText>GRAPHQL</TechItemText>
          </TechItem>
          <TechItem>
            <GatsbyJS />
            <TechItemText>GATSBYJS</TechItemText>
          </TechItem>
          <TechItem>
            <NodeJS />
            <TechItemText>NODEJS</TechItemText>
          </TechItem>
          <TechItem>
            <Redux />
            <TechItemText>REDUX</TechItemText>
          </TechItem>
          <TechItem>
            <Sagas />
            <TechItemText>REDUX SAGA</TechItemText>
          </TechItem>
          <TechItem>
            <WS />
            <TechItemText>WEBSTORM</TechItemText>
          </TechItem>
          <TechItem>
            <XD />
            <TechItemText>ADOBE XD</TechItemText>
          </TechItem>
          <TechItem>
            <Sass />
            <TechItemText>SASS</TechItemText>
          </TechItem>
        </TechGrid>
      </InnerTechContainer>
    </TechContainer>
  )
}

export default Tech