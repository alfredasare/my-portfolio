import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import { AboutSectionContainer, Content, ContentHead, ContentParagraph, InnerBlurb } from "./about-section.styles"

const AboutSection = () => {

  return (
    <AboutSectionContainer>
      <InnerBlurb>
        <Content>
          <ContentHead>A bit about me</ContentHead>
          <ContentParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet dicta dolor esse facere incidunt
            inventore ipsam laboriosam libero nisi odit possimus quisquam reiciendis, rerum, sapiente, sunt unde.
            Illo, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque autem consectetur,
            distinctio dolor earum esse impedit odit, perspiciatis placeat praesentium qui sequi sit temporibus ut
            velit voluptate, voluptatem? Beatae!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet dicta dolor esse facere incidunt
            inventore ipsam laboriosam libero nisi odit possimus quisquam reiciendis, rerum, sapiente, sunt unde.
            Illo, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque autem consectetur,
            distinctio dolor earum esse impedit odit, perspiciatis placeat praesentium qui sequi sit temporibus ut
            velit voluptate, voluptatem? Beatae!
          </ContentParagraph>
        </Content>
      </InnerBlurb>
    </AboutSectionContainer>
  )
}

export default AboutSection