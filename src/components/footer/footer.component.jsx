import React from "react";
import {
  CopyRight,
  CopyRightRow,
  CopyRightText, FirstAndSecondWrapper, FirstColumn, FirstColumnHead, FirstColumnText, FirstRow, FooterBrand,
  FooterContainer, FooterIcon,
  FooterLogo,
  FooterLogoContainer, MailMe, MailMeHead, SecondColumn, SecondColumnListItem, SecondColumnUl, ThirdColumn
} from "./footer.styles"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {

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
    <FooterContainer>
      <FirstRow>
        <FirstAndSecondWrapper>
          <FirstColumn>
            <FirstColumnHead>Let's Talk</FirstColumnHead>
            <FirstColumnText>
              Feel free to reach out to me at any time. You can reach me through email, on Twitter or Instagram or through Whatsapp.
            </FirstColumnText>
            <div><MailMeHead>MAIL ME</MailMeHead></div>
            <MailMe href="mailto:alfredasare101@gmail.com?subject=Let%20us%20collaborate%20to%20build%20a%20website" target="_blank">alfredasare101@gmail.com</MailMe>
          </FirstColumn>
          <SecondColumn>
            <SecondColumnUl>
              <SecondColumnListItem><h4>Recent Projects</h4></SecondColumnListItem>
              <SecondColumnListItem><a href="/#">Wevops</a></SecondColumnListItem>
              <SecondColumnListItem><a href="/#">Edanra</a></SecondColumnListItem>
              <SecondColumnListItem><a href="/#">Design Portfolio</a></SecondColumnListItem>
              <SecondColumnListItem><a href="/#">ChopFlix</a></SecondColumnListItem>
              <SecondColumnListItem><a href="/#">FR Logistics</a></SecondColumnListItem>
            </SecondColumnUl>
          </SecondColumn>
        </FirstAndSecondWrapper>
        <ThirdColumn>
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

      <CopyRightRow>
        <CopyRight>
          <CopyRightText>&copy; 2020 Alfred Asare </CopyRightText>
        </CopyRight>
        <FooterLogoContainer>
          <FooterLogo to="/">
            <FooterBrand fluid={data.footerLogo.childImageSharp.fluid}/>
          </FooterLogo>
        </FooterLogoContainer>
      </CopyRightRow>
    </FooterContainer>
  );
};

export default Footer;