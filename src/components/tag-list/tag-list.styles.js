import styled from "styled-components"

export const TagListContainer = styled.div`
  width: 50%;
  margin: 70px auto;
  display: flex;
  flex-wrap: wrap;
  
  @media screen and (max-width: 349px) {
    width: 90%;
  }
  
  @media screen and (max-width: 1919px) {
    width: 80%;
  }
`;