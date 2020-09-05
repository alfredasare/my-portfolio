import styled from "styled-components";
import { Link } from "gatsby"

export const BlogCardContainer = styled.div`
  height: 325px;
  min-height: 300px;
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

    @media screen and (max-width: 600px) {
      height: 325px;
      min-height: 300px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      height: 325px;
      min-height: 300px;
    }  

  p {
    color: ${({theme}) => theme.blogExcerpt};
    font-weight: 600;
  }
  
  h2 {
    font-size: 1.2rem;
    color: ${({theme}) => theme.primaryFont};
    
    @media screen and (max-width: 600px) {
      width: 90%;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      font-size: 1.1rem;
    }
  }
`;

export const CardLink = styled(Link)`
  color: black;
  
  &:active, &:hover {
    color: black;
  }
`;

export const SpanWrapper = styled.div`
  //display: grid;
  //grid-template-columns: 1fr 1fr;
  //grid-auto-flow: column;
  //grid-column-gap: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid rgba(0,0,0,0.09);
  padding-top: 10px;

`;


export const BlogSpan = styled.span`
  margin: 10px 15px 10px 0;
  padding: 4px 10px;
  background-color: ${({color}) => color} ;
  border-radius: 50px;
  width: auto;
  font-size: 0.8rem;
  color: black;
  text-align: center;
  font-weight: bold;
`;