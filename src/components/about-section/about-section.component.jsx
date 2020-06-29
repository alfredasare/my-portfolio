import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  AboutSectionContainer,
  Content,
  ContentHead, ContentLink,
  ContentLinkRow,
  ContentParagraph,
  InnerBlurb, SideContent, SideContentColumnOne, SideContentColumnTwo, SideContentHead, SideContentItem
} from "./about-section.styles"
import { PolyLine } from "../icons/icons.component"

const AboutSection = () => {

  const data = useStaticQuery(graphql`
      query {
          glasses: file(relativePath: { eq: "glasses.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 3000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          keyboard: file(relativePath: { eq: "keyboard.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 3000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <AboutSectionContainer>
      <InnerBlurb>
        <Content>
          <ContentHead>A bit about me</ContentHead>
          <ContentParagraph>
            <p>
              Hi! I'm Alfred Asare, currently a freelance web developer with about
              2 years of experience based in Tema - Ghana.
            </p>
            <p>
              I am very fascinated and passionate about user interface design as well
              as user experience design. I like to design clean, simple and minimalistic
              UI that are aesthetically pleasing and satisfying to use.
            </p>
            <p>
              Also, I co-founded Edanra, an online housing platform that helps people
              find good and affordable homes here in Ghana. I work on the platform
              from time to time if any issues pop up. I am available though for freelance work and you can contact me
              here.
            </p>
          </ContentParagraph>
          <ContentLinkRow>
            <ContentLink to="/#">View Projects</ContentLink>
          </ContentLinkRow>
        </Content>
        <SideContent>
          <SideContentColumnOne>
            <PolyLine/>
            <SideContentHead>Design</SideContentHead>
            <SideContentItem>Web Design</SideContentItem>
            <SideContentItem>UI & UX Design</SideContentItem>
          </SideContentColumnOne>
          <SideContentColumnTwo>
            <PolyLine/>
            <SideContentHead>Development</SideContentHead>
            <SideContentItem>Front End Development</SideContentItem>
            <SideContentItem>Back End Development</SideContentItem>
            <SideContentItem>Responsive Web Applications</SideContentItem>
          </SideContentColumnTwo>
        </SideContent>
      </InnerBlurb>
      {/*    <Img fluid={data.keyboard.childImageSharp.fluid}/>*/}
    </AboutSectionContainer>
  )
}

export default AboutSection