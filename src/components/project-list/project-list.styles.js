import styled from "styled-components"
import { bitterSweet } from "../../utils/colors"

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

export const ProjectListHead = styled.h1`
  text-transform: uppercase;
  color: ${bitterSweet};
  text-align: center;
  margin-bottom: 50px;
  font-size: 3rem;
  letter-spacing: 2px;
`;