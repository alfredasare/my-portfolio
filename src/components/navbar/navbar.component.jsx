import React, {useState} from "react";
import {
  BrandLogo,
  NavBarBrand,
  NavBarContainer,
  NavBarRow,
  NavMenuContainer,
  NavMenuIcon,
  ThemeButton
} from "./navbar.styles"
import Burger from "../burger/burger.component"
import OverlayMenu from "../overlay-menu/overlay-menu.component"
import { graphql, useStaticQuery } from "gatsby"


const NavBar = ({theme, toggleTheme, themeMode}) => {

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
      <OverlayMenu open={open} setOpen={setOpen} themeMode={themeMode}/>
      <NavBarRow>
        <NavBarBrand open={open} to="/">
          <BrandLogo fluid={data.logo.childImageSharp.fluid}/>
        </NavBarBrand>
        <NavMenuContainer>
          <NavMenuIcon>
            <Burger open={open} setOpen={setOpen}/>
          </NavMenuIcon>
          <ThemeButton onClick={() => toggleTheme()} className="theme">
            {
              theme !== "dark"
                ? <img src={require("../../assets/images/darkmode.e2b27f9b.svg")} alt=""/>
                : <img src={require("../../assets/images/wb_sunny-24px.svg")} alt=""/>
            }
          </ThemeButton>

        </NavMenuContainer>
      </NavBarRow>
    </NavBarContainer>
  );
};

export default NavBar;