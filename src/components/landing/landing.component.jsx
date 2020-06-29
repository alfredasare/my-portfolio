import React from "react"
import {useStaticQuery, graphql} from "gatsby"
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
  `);

  return (
    <LandingWrapper>
      <LandingGrid>
        <LandingIntro>
          <LandingIntroText>I'm <Name>Alfred Asare</Name>, a Freelance Web Developer. I enjoy creating clean and user-friendly web apps that give users delight and satisfaction.</LandingIntroText>
          <CTA to="/#projects">View Projects</CTA>
        </LandingIntro>
        <LandingImgContainer>
          <LandingImg fluid={data.alfred.childImageSharp.fluid}/>
        </LandingImgContainer>
      </LandingGrid>
    </LandingWrapper>
  );
};

export default Landing;