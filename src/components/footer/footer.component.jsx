import React, { useEffect } from "react"
import {
  CopyRight,
  CopyRightRow,
  CopyRightText, FirstAndSecondWrapper, FirstColumn, FirstColumnHead, FirstColumnText, FirstRow, FooterBrand,
  FooterContainer, FooterIcon,
  FooterLogo,
  MailMe, MailMeHead, SecondColumn, SecondColumnListItem, SecondColumnUl, ThirdColumn
} from "./footer.styles"
import { graphql, useStaticQuery } from "gatsby"
import { gsap, Power4 } from "gsap"

const Footer = () => {

  useEffect(() => {

    gsap.from(".footer-first-column", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".footer-first-column",
        toggleActions: "restart none restart none"
      },
      ease: Power4.easeInOut
    });

    gsap.from(".footer-second-column", {
      duration: 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".footer-second-column",
        toggleActions: "restart none restart none"
      },
      ease: Power4.easeInOut
    });

    gsap.from(".footer-third-column", {
      duration: 1.4,
      opacity: 0,
      scrollTrigger: {
        trigger: ".footer-third-column",
        toggleActions: "restart none restart none"
      },
      ease: Power4.easeInOut
    });

    gsap.from(".footer-copyright-row", {
      duration: 1.6,
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".footer-copyright-row",
        toggleActions: "restart none restart none"
      },
    });


  }, []);

  const data = useStaticQuery(graphql`
      query {
          footerLogo: file(relativePath: { eq: "brand.png"}) {
              childImageSharp {
                  fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (
    <FooterContainer id="contact">
      <FirstRow>
        <FirstAndSecondWrapper>
          <FirstColumn className="footer-first-column">
            <FirstColumnHead>Let's Talk</FirstColumnHead>
            <FirstColumnText>
              Feel free to reach out to me at any time. You can reach me through email, on Twitter or Instagram or through Whatsapp.
            </FirstColumnText>
            <div><MailMeHead>MAIL ME</MailMeHead></div>
            <MailMe href="mailto:alfredasare101@gmail.com?subject=Let%20us%20collaborate%20to%20build%20a%20website" target="_blank">alfredasare101@gmail.com</MailMe>
          </FirstColumn>
          <SecondColumn className="footer-second-column">
            <SecondColumnUl>
              <SecondColumnListItem><h4>Recent Projects</h4></SecondColumnListItem>
              <SecondColumnListItem><a href="https://wevops-portfolio.netlify.app/" target="_blank" rel="noreferrer">Wevops</a></SecondColumnListItem>
              <SecondColumnListItem><a href="https://www.edanra.com" target="_blank" rel="noreferrer">Edanra</a></SecondColumnListItem>
              <SecondColumnListItem><a href="https://drvmroll-design-portfolio.netlify.app/" target="_blank" rel="noreferrer">Design Portfolio</a></SecondColumnListItem>
              <SecondColumnListItem><a href="http://chop-flix.netlify.app/" target="_blank" rel="noreferrer">ChopFlix</a></SecondColumnListItem>
              <SecondColumnListItem><a href="https://www.frlogisticsltd.com" target="_blank" rel="noreferrer">FR Logistics</a></SecondColumnListItem>
            </SecondColumnUl>
          </SecondColumn>
        </FirstAndSecondWrapper>
        <ThirdColumn className="footer-third-column">
          <FooterIcon>
            <i className="fab fa-facebook-f" aria-hidden="true"/>
          </FooterIcon>
          <FooterIcon>
            <i className="fab fa-instagram" aria-hidden="true" />
          </FooterIcon>
          <FooterIcon>
            <i className="fab fa-linkedin" aria-hidden="true" />
          </FooterIcon>
          <FooterIcon>
            <i className="fab fa-github" aria-hidden="true" />
          </FooterIcon>

        </ThirdColumn>
      </FirstRow>

      <CopyRightRow className="footer-copyright-row">
        <CopyRight>
          <CopyRightText>&copy; 2020 Alfred Asare </CopyRightText>
        </CopyRight>
          <FooterLogo to="/">
            <FooterBrand fluid={data.footerLogo.childImageSharp.fluid}/>
          </FooterLogo>
      </CopyRightRow>
    </FooterContainer>
  );
};

export default Footer;