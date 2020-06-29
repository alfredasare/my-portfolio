import React, {useEffect} from "react";
import { MenuContent, MenuLink, StyledMenu } from "./overlay-menu.styles"

const OverlayMenu = ({open, setOpen}) => {

  const isHidden = !!open;

  useEffect(() => {
    if (open) {
      document.querySelector("html").classList.add("hide-overflow");
    } else {
      document.querySelector("html").classList.remove("hide-overflow");
    }
  });

  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      <MenuLink to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Home
        </MenuContent>
      </MenuLink>
      <MenuLink to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Projects
        </MenuContent>
      </MenuLink>
      <MenuLink to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          About us
        </MenuContent>
      </MenuLink>
      <MenuLink to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Contact
        </MenuContent>
      </MenuLink>
    </StyledMenu>
  );
};

export default OverlayMenu;