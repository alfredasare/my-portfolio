import React, { useEffect } from "react"
import { gsap, Power4 } from "gsap";
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

  useEffect(() => {

    gsap.from(".about-main", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-main",
        toggleActions: "restart none restart none"
      },
      x: -30,
      ease: Power4.easeInOut,
      duration: 1,
      // delay: 5.8
    })

    gsap.from(".about-side", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-side",
        toggleActions: "restart none restart none"
      },
      x: 30,
      ease: Power4.easeInOut,
      duration: 1,
      // delay: 5.8
    })

  }, [])

  return (
    <AboutSectionContainer>
      <InnerBlurb>
        <Content className="about-main">
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
            <ContentLink to="/#projects">View Projects</ContentLink>
          </ContentLinkRow>
        </Content>
        <SideContent className="about-side">
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
    </AboutSectionContainer>
  )
}

export default AboutSection