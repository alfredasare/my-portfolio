import styled from "styled-components"

export const BlogSectionWrapper = styled.section`
  height: 100%;
  width: 90%;
  margin: 80px auto 80px auto;
  text-align: center;
  
  @media screen and (max-width: 767px) {
    width: 95%;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    width: 90%;
  }
`;

export const SmallBlogSectionHead = styled.h5`
  color: ${({theme}) => theme.secondaryFont};
  font-weight: lighter;
  margin-bottom: 20px;
  font-size: 1rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

export const BlogSectionHead = styled.h1`
  font-size: 2.5rem;
  color: ${({theme}) => theme.primaryFont}
`;

export const BlogSectionParagraph = styled.h3`
  color: ${({theme}) => theme.secondaryFont};
  //width: 60%;
  margin: 20px auto 0 auto;
  
  span {
    color: #ffffff;
  }
  
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 30px auto 0 auto;
  }
`;