import styled from "styled-components";
import { bitterSweet } from "../../utils/colors"
import { Link } from "gatsby"
import Img from 'gatsby-image'

export const FooterContainer = styled.footer`
  height: 100%;
  width: 100%;
  background-color: ${({theme}) => theme.backgroundColor};
  color: black;
  margin-top: 30px;
  padding: 100px;
  border-top: 1px solid ${({theme}) => theme.borderColor};
  
  @media screen and (max-width: 600px) {
    padding: 40px;
  }
  
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FirstAndSecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 80%;
  }
`;

export const FirstColumn = styled.div`
  width: 40%;
  
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 50px;
  }
  
`;

export const FirstColumnHead = styled.h2`
  font-size: 4rem;
  color: ${({theme}) => theme.primaryFont};
  
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
  
  @media screen and (min-width: 601px) and (max-width: 1280px) {
    font-size: 2rem;
  }
`;

export const FirstColumnText = styled.p`
  font-size: 1.7rem;
  color: ${({theme}) => theme.primaryFont};
  
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const MailMeHead = styled.h4`
  color: ${({theme}) => theme.fadedFooterText};
  margin-bottom: 40px;
`;

export const MailMe = styled.a`
  color: ${({theme}) => theme.primaryFont};
  padding: 20px 30px;
  border: 3px solid ${({theme}) => theme.primaryFont};
`;

export const SecondColumn = styled.div``;

export const SecondColumnUl = styled.ul`
  list-style-type: none;
  font-size: 1.3rem;
`;

export const SecondColumnListItem = styled.li`
  margin: 5px;
  color: ${({theme}) => theme.primaryFont};
  
  a {
    color: ${({theme}) => theme.primaryFont};
    transition: color 0.2s ease-in-out;
    
    &:hover {
       color: ${bitterSweet};
    }
  }
  
  &:first-child {
    margin-bottom: 20px;
  }
`;

export const ThirdColumn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
   @media screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const FooterIcon = styled.a`
  border-radius: 50%;
  height: 90px;
  width: 90px;
  line-height: 90px;
  text-align: center;
  vertical-align: middle;
  color: ${({theme}) => theme.primaryFont};
  
  &:hover {
    i {
      color: ${bitterSweet};
    }
  }

  i {
    font-size: 1.7rem;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
    
    &:hover {
      color: ${bitterSweet};
    }
  }
`;

export const CopyRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 80px auto 0 auto;
`;

export const CopyRight = styled.div``;

export const CopyRightText = styled.p`
  margin-bottom: 0;
  padding-bottom: 0;
  color: ${({theme}) => theme.fadedFooterText};
  font-weight: bold;
  font-size: 1.2rem;
  
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

export const FooterLogo = styled(Link)`
  
`;

export const FooterBrand = styled(Img)`
  height: 80px;
  width: 80px;
`;