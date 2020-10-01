import styled from "styled-components";
import Img from "gatsby-image"
import { Link } from "gatsby"
import { bitterSweet, grey } from "../../utils/colors"

export const NotFoundWrapper = styled.section`
  width: 100%;
  height: 100vh;  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  
  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const MainContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const MainContent = styled.div`
  width: 50%;
  
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  
  .top-logo {
    @media screen and (min-width: 600px) {
      display: none;
      margin-top: 70px;
    }
  }
`;

export const Head404 = styled.h3`
  font-weight: lighter;
  font-size: 5rem;
`;

export const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 4.5rem;
  position: relative;
  
  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }
  
  &:before {
    content: '';
    background-color: black;
    height: 10px;
    width: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const MainParagraph = styled.p`
  font-weight: bold;
  font-size: 2rem;
  color: ${grey};
  margin-bottom: 50px;
  margin-top: 40px;
  
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const HomeButton = styled(Link)`
  background-color: black;
  color: white;
  padding: 15px 25px;
`;

export const ErrorImageContainer = styled.div`
  width: 160px;
  height: 340px;
  margin: 0 auto;
  transform: rotate(10deg);
  
  @media screen and (max-width: 600px) {
    margin: 50px auto;
  }
`;

export const ErrorImage = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const ErrorFooter = styled.footer`
  width: 80%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ErrorSocialContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ErrorSocialLink = styled.a`
  border-radius: 50%;
  height: 90px;
  width: 90px;
  line-height: 90px;
  text-align: center;
  vertical-align: middle;
  padding: 0;
  margin-right: 30px;
  color: black;
  
  &:hover {
    i {
      color: ${bitterSweet};
    }
  }

  i {
    font-size: 1.7rem;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    vertical-align: middle;
    
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
    
    &:hover {
      color: ${bitterSweet};
    }
  }
`;

export const ErrorLogo = styled(Link)`
  
`;

export const ErrorBrand = styled(Img)`
  height: 80px;
  width: 80px;
`;