import React, {useEffect} from "react";
import {
  AniMenuLink,
  MenuContent,
  MenuLink,
  OverlayMenuSocial,
  OverlayMenuSocialLink,
  StyledMenu
} from "./overlay-menu.styles"

const OverlayMenu = ({open, setOpen, themeMode}) => {

  const isHidden = !!open;

  useEffect(() => {
    if (open) {
      document.querySelector("html").classList.add("hide-overflow");
    } else {
      document.querySelector("html").classList.remove("hide-overflow");
    }
  }, []);

  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      <AniMenuLink cover duration={1} bg={`${themeMode.backgroundColor}`} to="/#">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Home
        </MenuContent>
      </AniMenuLink>
      <MenuLink to="/#about">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          About me
        </MenuContent>
      </MenuLink>
      <MenuLink to="/#projects">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Projects
        </MenuContent>
      </MenuLink>
      <MenuLink to="/#contact">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Contact
        </MenuContent>
      </MenuLink>
      <AniMenuLink cover duration={1} bg={`${themeMode.backgroundColor}`} to="/blog">
        <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
          Blog
        </MenuContent>
      </AniMenuLink>
      <OverlayMenuSocial>
        <OverlayMenuSocialLink href="https://web.facebook.com/alfred.asareamoah" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f" aria-hidden="true"/>
        </OverlayMenuSocialLink>
        <OverlayMenuSocialLink href="https://www.instagram.com/_alfredamoah_/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram" aria-hidden="true" />
        </OverlayMenuSocialLink>
        <OverlayMenuSocialLink href="https://www.linkedin.com/in/alfred-asare-amoah-2b31b5142/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" aria-hidden="true" />
        </OverlayMenuSocialLink>
        <OverlayMenuSocialLink href="https://github.com/alfredasare" target="_blank" rel="noreferrer">
          <i className="fab fa-github" aria-hidden="true" />
        </OverlayMenuSocialLink>
      </OverlayMenuSocial>
    </StyledMenu>
  );
};

export default OverlayMenu;