import React from "react";
import {
  CopyRight,
  CopyRightRow,
  CopyRightText,
  FooterContainer,
  FooterLogo,
  FooterLogoContainer
} from "./footer.styles"

const Footer = () => {

  return (
    <FooterContainer>


      <CopyRightRow>
        <CopyRight>
          <CopyRightText></CopyRightText>
        </CopyRight>
        <FooterLogoContainer>
          <FooterLogo/>
        </FooterLogoContainer>
      </CopyRightRow>
    </FooterContainer>
  );
};

export default Footer;