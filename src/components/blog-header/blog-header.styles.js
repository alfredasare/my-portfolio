import styled from "styled-components";

export const BlogHeaderContainer = styled.section`
  
  margin: 150px auto 0 auto;
  width: 80%;
  text-align: center;
  
  @media screen and (max-width: 767px) {
    width: 90%;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
 
  
  h1 {
    font-size: 2.5rem;
    color: ${({theme}) => theme.primaryFont};
  }
  
  h3 {
    color: ${({theme}) => theme.blogSubHead};
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-size: 1.4rem;
    margin-top: 10px;
    
    @media screen and (max-width: 600px) {
      width: 90%;
      text-align: center;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 90%;
      text-align: center;
    }
  }

`;
