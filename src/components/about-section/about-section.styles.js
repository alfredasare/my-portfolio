import styled from "styled-components";
import { Link } from "gatsby"

export const AboutSectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding: 48px 0;
  position: relative;
`;

export const InnerBlurb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 33%;
  
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  
  @media screen and (min-width: 610px) and (max-width: 1440px) {
    width: 40%;
  }
`;

export const ContentHead = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 1.5px;
  margin: 0;
`;

export const ContentParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 40px 0 72px;
`;

export const ContentLinkRow = styled.div``;

export const ContentLink = styled(Link)`
  font-weight: bold;
  font-size: .875rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
`;

export const BlurbImages = styled.div``;

export const TopRight = styled.div``;

export const BottomLeft = styled.div``;

export const BlackBox = styled.div``;

export const BlackBoxOverLay = styled.div``;