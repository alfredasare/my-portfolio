import React, { useEffect } from "react"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Landing from "../components/landing/landing.component"
import NavBar from "../components/navbar/navbar.component"
import Footer from "../components/footer/footer.component"
import {NavBarScroll} from "../utils/navbar-scroll"
import AboutSection from "../components/about-section/about-section.component"
import Cursor from "../components/cursor/cursor.component"
import ProjectListContainer from "../components/project-list/project-list.container"


export default () => {

  useEffect(() => {
    NavBarScroll();
  }, []);

  return (
    <Wrapper>
      <SEO title="Alfred Asare"/>
      <Cursor />
      <NavBar />
      <Landing />
      <AboutSection />
      <ProjectListContainer />
      <Footer />
    </Wrapper>
  );
};


