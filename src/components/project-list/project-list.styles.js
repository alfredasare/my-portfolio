import styled from "styled-components";

export const ProjectListContainer = styled.section`
  height: 100%;
  width: 80%;
  margin: 80px auto 80px auto;
  
  @media screen and (max-width: 600px) {
    width: 95%;
  }
  
  @media screen and (min-width: 768px) and  (max-width: 1024px) {
    width: 90%;
  }
`;

export const SmallProjectListHead = styled.h5`
  color: #878a8f;
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
`;