import styled from "styled-components";
import Img from "gatsby-image";

export const ProjectItemContainer = styled.div`
  height: 70vh;
  width: 100%;
  background-color: white;
  box-shadow: 0 18px 43px -20px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 18px 43px -20px rgba(0,0,0,0.1);
  border: none;
  padding: 100px;
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    height: 40vh;
  }
`;

export const ProjectInfo = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
`;

export const ProjectCategoryWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ProjectCategory = styled.span`
  padding: 0.6rem 0.7rem;
  font-size: .75rem;
  background-color: #F4F5F6;
  width: 100%;
  margin-top: 100px;
  font-weight: bold;
`;

export const ProjectHead = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

export const ProjectInfoParagraph = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

export const ViewSiteLink = styled.a``;

export const ProjectImageContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const ProjectImage = styled(Img)``;