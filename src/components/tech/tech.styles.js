import styled from "styled-components";

export const TechContainer = styled.section`
  height: 100%;
  width: 100%;
  border-top: 1px solid ${({theme}) => theme.borderColor};
  border-bottom: 1px solid ${({theme}) => theme.borderColor};
`;

export const InnerTechContainer = styled.div`
  width: 80%;
  margin: 70px auto;
  text-align: center;
`;

export const SmallTechHead = styled.h5`
  color: ${({theme}) => theme.secondaryFont};
  font-weight: lighter;
  margin-bottom: 20px;
  font-size: 1rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

export const TechHead = styled.h1`
  font-size: 2.5rem;
  color: ${({theme}) => theme.primaryFont}
`;

export const TechParagraph = styled.h3`
  color: ${({theme}) => theme.secondaryFont};
  width: 60%;
  margin: 20px auto 0 auto;
  
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 30px auto 0 auto;
  }
`;

export const TechGrid = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 40px;
  
  @media screen and (max-width: 600px) {
     grid-template-columns: 1fr 1fr;
  }
`;

export const TechItem = styled.div`
  svg {
    height: 70px;
    width: 70px;
  }
`;

export const TechItemText = styled.h4`
  margin-top: 10px;
  color: ${({theme}) => theme.primaryFont}
`;