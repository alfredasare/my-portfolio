import React, {useRef, useEffect} from "react"
import {useStaticQuery, graphql} from "gatsby"
import {gsap} from "gsap";
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

  let tl = gsap.timeline({delay: .8});

  useEffect(() => {

    tl.from(".imageContainer", {duration: 1.2, y: 1280, ease: "power4.out"}, 'Landing')
      .from(".image", {duration: 2, scale: 1.2, ease: "power4.out"}, .2);

    tl.from(".intro-text", {
      opacity: 0,
      y: 60,
      ease: "power4.out",
      duration: 1
    }, 'Landing').from(".cta", {
      opacity: 0,
      y: 60,
      ease: "power4.out",
      duration: 1
    }, .2);
  }, [tl]);


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
    <LandingWrapper className="land-wrapper">
      <LandingGrid>
        <LandingIntro className="fade">
          <LandingIntroText className="intro-text">I'm <Name>Alfred Asare</Name>, a Freelance Web Developer. I enjoy creating clean and user-friendly web apps that give users delight and satisfaction.</LandingIntroText>
          <CTA to="/#projects" className="cta">View Projects</CTA>
        </LandingIntro>
        <LandingImgContainer className="imageContainer">
          <LandingImg className="image" fluid={data.alfred.childImageSharp.fluid}/>
        </LandingImgContainer>
      </LandingGrid>
    </LandingWrapper>
  );
};

export default Landing;