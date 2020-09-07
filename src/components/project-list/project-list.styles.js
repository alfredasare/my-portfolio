import styled from "styled-components";

export const ProjectListWrapper = styled.section`
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
`;

export const ProjectListContainer = styled.div`
  height: 100%;
  width: 80%;
  margin: 80px auto 80px auto;
  
  @media screen and (max-width: 767px) {
    width: 95%;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    width: 90%;
  }
`;

export const SmallProjectListHead = styled.h5`
  color: ${({theme}) => theme.secondaryFont};
  font-weight: lighter;
  margin-bottom: 20px;
  font-size: 1rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  text-align: center;
`;

export const ProjectListHead = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: ${({theme}) => theme.primaryFont}
`;