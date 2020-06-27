import React, {useEffect} from "react";
import {MenuContent, StyledMenu} from "./overlay-menu.styles"
import {Link} from "gatsby";

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
      <Link to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Home
        </MenuContent>
      </Link>
      <Link to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Projects
        </MenuContent>
      </Link>
      <Link to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          About us
        </MenuContent>
      </Link>
      <Link to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Contact
        </MenuContent>
      </Link>
    </StyledMenu>
  );
};

export default OverlayMenu;