import styled from "styled-components";
import { Link } from "gatsby"
import { bitterSweet, grey } from "../../utils/colors"

export const AboutSectionContainer = styled.section`
  height: 100%;
  width: 100%;
  padding: 48px 0;
  position: relative;
  
    @media screen and (max-width: 600px) {
      margin-top: 60px;
    }
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
  color: ${bitterSweet};
`;

export const ContentParagraph = styled.div`
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
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${bitterSweet};
  }
`;

export const SideContent = styled.div`
  width: 50%;
  height: 320px;
  padding: 50px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  box-shadow: 0 3px 15px rgba(0,0,0,0.2);
  
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-top: 35px;
    flex-direction: column;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    padding: 20px;
    justify-content: space-between;
  }
`;

export const SideContentHead = styled.h3`
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
`;

export const SideContentItem = styled.h4`
  color: ${grey};
  margin-bottom: 30px;
  
`;

export const SideContentColumnOne = styled.div`
  
`;

export const SideContentColumnTwo = styled.div``;


