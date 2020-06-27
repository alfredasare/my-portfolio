import React, {useState} from "react";
import { NavBarBrand, NavBarContainer, NavBarRow, NavMenuContainer, NavMenuIcon, NavMenuText } from "./navbar.styles"
import { Logo } from "../icons/icons.component"
import Burger from "../burger/burger.component"
import OverlayMenu from "../overlay-menu/overlay-menu.component"


const NavBar = () => {

  const [open, setOpen] = useState(false);

  return(
    <NavBarContainer>
      <OverlayMenu open={open} setOpen={setOpen}/>
      <NavBarRow>
        <NavBarBrand>
          <Logo />
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