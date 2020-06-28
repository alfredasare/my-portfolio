import React, { useEffect } from "react"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Landing from "../components/landing/landing.component"
import NavBar from "../components/navbar/navbar.component"
import Footer from "../components/footer/footer.component"
import {NavBarScroll} from "../utils/navbar-scroll"


export default () => {

  useEffect(() => {
    NavBarScroll();
  }, []);

  return (
    <Wrapper>
      <SEO title="Alfred Asare"/>
      <NavBar />
      <Landing />
      <Footer />
    </Wrapper>
  );
};


