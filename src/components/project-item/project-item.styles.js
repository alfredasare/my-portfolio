import styled from "styled-components";
import Img from "gatsby-image";

export const ProjectItemContainer = styled.div`
  height: 68vh;
  //height: 100%;
  width: 100%;
  background-color: white;
  box-shadow: 0 18px 43px -20px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 18px 43px -20px rgba(0,0,0,0.1);
  border: none;
  display: flex;
  flex-direction: ${({index}) => index % 2 === 0 ? 'row-reverse' : 'row'};
  margin-bottom: 100px;
  
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    height: 100%;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    height: 40vh;
  }
`;

export const ProjectInfo = styled.div`
  width: 50%;
  height: auto;
  background-color: ${({bgColor}) => bgColor};
  color: ${({fontColor}) => fontColor};
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 70px 50px;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    padding: 30px 50px;
  }
`;

export const ProjectCategoryWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ProjectCategory = styled.span`
  padding: 0.6rem 0.7rem;
  font-size: .75rem;
  color: black;
  background-color: #F4F5F6;
  width: 100%;
  margin-top: 100px;
  font-weight: bold;
`;

export const ProjectHead = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  
  @media screen and (max-width: 600px) {
    font-size: 2.0rem;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const ProjectInfoParagraph = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.7rem;
  
  @media screen and (max-width: 600px) {
    font-size: 1.0rem;
    line-height: 1.5rem;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

export const ViewSiteLinkContainer = styled.div`
  margin-top: 60px;
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    margin-top: 20px;
  }
`;

export const ViewSiteLink = styled.a`
  background-color: ${({linkBg}) => linkBg};
  color: ${({linkColor}) => linkColor};
  padding: 0.9rem 2.3rem;
  border-radius: 0;
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    padding: 0.6rem 2.0rem;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 50%;
  height: auto;
  background-color: gray;
  
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50vh;
  }
`;

export const ProjectImage = styled(Img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;