import styled from "styled-components"
import {Link} from "gatsby"
import Img from 'gatsby-image'
import { bitterSweet } from "../../utils/colors"

export const LandingWrapper = styled.header`
  width: 100%;
  height: 100vh;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 320px) {
    height: 100%;
  }
  
  @media screen and (min-width: 321px) and (max-width: 600px) {
    height: 100%;
  }
  
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    height: 60vh;
  }
`;

export const LandingGrid = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: center;
  align-items: center;
  grid-gap: 10%;
  
  @media screen and (max-width: 520px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const LandingIntro = styled.section`
  //width: 40%;
  
`;

export const LandingIntroText = styled.p`
  font-size: 1.9rem;
  width: 100%;
  font-weight: 700;
  margin-bottom: 60px;
  
  @media screen and (max-width: 520px) {
    font-size: 1rem;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Name = styled.span`
  color: ${bitterSweet};
`;

export const CTA = styled(Link)`
  background-color: black;
  color: white;
  padding: 15px 25px;
  margin-top: 30px;
  transition: background-color 0.2s ease-in;
  
  &:hover {
    background-color: rgba(0,0,0,0.7);
  }
`;

export const LandingImgContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-top: 100px;
  
  @media screen and (max-width: 320px) {
    margin-top: 10em;
  }
  
  @media screen and (min-width: 321px) and (max-width: 600px) {
    margin-bottom: 30px;
    margin-top: 10em;
  }
`;

export const LandingImg = styled(Img)`
  max-width: 450px;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  
  @media screen and (max-width: 520px) {
    max-width: 350px;
  }
  
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;