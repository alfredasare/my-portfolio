import styled from "styled-components"
import { Link } from "gatsby"

export const BlogPostWrapper = styled.div`
  width: 70%;
  margin: 130px auto 0 auto;
  position: relative;
  
  li {
    a {
      color: ${({theme}) => theme.blogLink};
      
      &:hover {
        color: ${({theme}) => theme.blogLinkHover};
      }
    } 
  }
  
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 80%;
  }
`;

export const BackLink = styled(Link)`
  color: ${({theme}) => theme.blogLink};
  font-size: 1.2rem;
  font-weight: bold;
  
  &:hover {
    color: ${({theme}) => theme.blogLinkHover};
  }
`;

export const BlogPostHead = styled.h1`
  margin-top: 40px;
  text-align: center;
  color: ${({theme}) => theme.primaryFont};
`;

export const BlogPostDate = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${({theme}) => theme.secondaryFont};
  margin-top: 0;
`;

export const BlogContent = styled.section`
  width: 70%;
  margin: 50px auto 0 auto;
  font-size: 1.1rem;
  color: ${({theme}) => theme.primaryFont};
  
  deckgo-highlight-code {
    font-size: 1rem;
  }
  
  @media screen and (max-width: 600px) {
    width: 95%;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
  
  img {
    width: 100%;
  }
  
  a {
    color: rgba(0,0,0,0.7);
    font-weight: bold;
    transition: 0.2s color ease-in-out;
    
    &:hover {
      color: rgba(0,0,0,1.0);
    }
  }
`;

export const PostNavWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 100px auto 0 auto;
  font-size: 1.1rem;
  padding-bottom: 50px;
  font-weight: bold;
  
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1rem;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
  
  a {
    color: ${({theme}) => theme.blogLink};
    transition: color 0.2s ease-in-out;
    
    @media screen and (max-width: 600px) {
      width: 50%;
      font-size: 0.9rem;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 50%;
    }
    
    &:hover {
      color: ${({theme}) => theme.blogLinkHover};
    }
  }
`;

export const NextPost = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const PreviousPost = styled(Link)``;

