import styled from "styled-components"
import { bitterSweet } from "../../utils/colors"

export const NavBarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 50px;
  color: black;
  z-index: 50;
  background-color: white;
  transition: top 90ms linear, padding 90ms linear;
`;


export const NavBarRow = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarBrand = styled.div`
  width: 30%;
  z-index: 10;
  svg {
    height: 100px;
    width: 100px;
    fill: ${bitterSweet};
  }

`;

export const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
`;

export const NavMenuText = styled.h5`
  font-size: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const NavMenuIcon = styled.div``;