import React, {useEffect} from "react";
import { MenuContent, MenuLink, OverlayMenuSocial, OverlayMenuSocialLink, StyledMenu } from "./overlay-menu.styles"

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
      <MenuLink to="/#projects">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Projects
        </MenuContent>
      </MenuLink>
      <MenuLink to="/#about">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          About me
        </MenuContent>
      </MenuLink>
      <MenuLink to="/#contact">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Contact
        </MenuContent>
      </MenuLink>
      <OverlayMenuSocial>
        <OverlayMenuSocialLink>
          <i className="fab fa-facebook-f" aria-hidden="true"/>
        </OverlayMenuSocialLink>
        <OverlayMenuSocialLink>
          <i className="fab fa-instagram" aria-hidden="true" />
        </OverlayMenuSocialLink>
        <OverlayMenuSocialLink>
          <i className="fab fa-linkedin" aria-hidden="true" />
        </OverlayMenuSocialLink>
        <OverlayMenuSocialLink>
          <i className="fab fa-github" aria-hidden="true" />
        </OverlayMenuSocialLink>
      </OverlayMenuSocial>
    </StyledMenu>
  );
};

export default OverlayMenu;