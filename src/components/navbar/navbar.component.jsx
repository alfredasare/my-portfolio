import React, {useState} from "react";
import {
  BrandLogo,
  NavBarBrand,
  NavBarContainer,
  NavBarRow,
  NavMenuContainer,
  NavMenuIcon,
  NavMenuText
} from "./navbar.styles"
import Burger from "../burger/burger.component"
import OverlayMenu from "../overlay-menu/overlay-menu.component"
import { graphql, useStaticQuery } from "gatsby"


const NavBar = () => {

  const [open, setOpen] = useState(false);

  const data = useStaticQuery(graphql`
      query {
          logo: file(relativePath: { eq: "brand.png"}) {
              childImageSharp {
                  fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return(
    <NavBarContainer>
      <OverlayMenu open={open} setOpen={setOpen}/>
      <NavBarRow>
        <NavBarBrand open={open} to="/">
          <BrandLogo fluid={data.logo.childImageSharp.fluid}/>
        </NavBarBrand>
        <NavMenuContainer>
          <NavMenuText onClick={() => setOpen(!open)}>
            {open ? 'Close': 'Menu'}
          </NavMenuText>
          <NavMenuIcon>
            <Burger open={open} setOpen={setOpen}/>
          </NavMenuIcon>
        </NavMenuContainer>
      </NavBarRow>
    </NavBarContainer>
  );
};

export default NavBar;