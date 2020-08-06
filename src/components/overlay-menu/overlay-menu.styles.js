import styled from "styled-components";
import { Link } from "gatsby"
import { bitterSweet } from "../../utils/colors"

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out;
  animation: ${({ open }) => open ? 'fade-in 0.6s ease-in-out' : 'none'};
   & >:nth-child(even) > *{
    animation:  ${({ open }) => open ? 'fade-in 1.0s ease-in-out 0.3s both,' +
    'color-change 0.5s ease-out 1.3s both' : 'none'};
  }
  
  & >:nth-child(odd) > *{
    animation:  ${({ open }) => open ? 'fade-in 1.0s ease-in-out 0.3s both,' +
    'color-change 0.5s ease-out 1.3s both' : 'none'};
  }
  
  @media screen and (max-width: 520px) {
    height: 115vh;
  }
`;

export const MenuLink = styled(Link)`
  margin-bottom: 5vh;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin-bottom: 8vh;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 7vh;
  }
`;

export const MenuContent = styled.h4`
  color: rgba(0,0,0,0.6);
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.2s ease-in;
  position: relative;
  
  @media screen and (max-width: 1024px) {
    color: black;
  }
  
  &:before {
      content: '';
      position: absolute;
      height: 5px;
      width: 50px;
      background-color: ${bitterSweet};
      left: -70px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.2s ease-in;
      
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  
  &:hover{
    color: black;
    
    &:before {
      opacity: 1;
    }
    
  }
  @media only screen and (max-width: 520px){
    font-size: 1.5em;
  }
`;

export const OverlayMenuSocial = styled.div`
  height: 90px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  @media screen and  (max-width: 600px) {
    width: 90%;
  }
`;

export const OverlayMenuSocialLink = styled.a`
  border-radius: 100%;
  padding: 0;
  margin: 0;
  height: 90px;
  width: 90px;
  line-height: 90px;
  text-align: center;
  color: black;
  
  &:hover {
    i {
      color: ${bitterSweet};
    }
  }

  i {
    font-size: 1.7rem;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    vertical-align: middle;
    
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
    
    &:hover {
      color: ${bitterSweet};
    }
`;