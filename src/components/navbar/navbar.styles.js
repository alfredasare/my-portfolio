import styled from "styled-components"
import Img from 'gatsby-image'
import { Link } from "gatsby"

export const NavBarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 25px;
  color: black;
  z-index: 50;
  background-color: ${({theme}) => theme.backgroundColor};
  transition: top 90ms linear, padding 90ms linear;
  
  @media screen and (max-width: 600px) {
    padding: 30px 20px;
  }
`;


export const NavBarRow = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarBrand = styled(Link)`
  width: auto;
  z-index: 10;
  pointer-events: ${({open}) => open ? 'none' : 'unset'};
`;

export const BrandLogo = styled(Img)`
  height: 80px;
  width: 80px;
`;

export const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  border-radius: 50%;
  height: 80px;
`;

export const NavMenuText = styled.h5`
  font-size: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  color: ${({theme}) => theme.menuText}
`;

export const NavMenuIcon = styled.div`
  
`;

export const ThemeButton = styled.div`
  margin-left: 2rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  
  img {
    height: 80%;
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
  }
`;