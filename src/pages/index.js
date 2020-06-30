import React, { useEffect } from "react"
import SEO from "../components/seo"
import WrapperComponent from "../components/wrapper/wrapper.component"
import Landing from "../components/landing/landing.component"
import NavBar from "../components/navbar/navbar.component"
import Footer from "../components/footer/footer.component"
import {NavBarScroll} from "../utils/navbar-scroll"
import AboutSection from "../components/about-section/about-section.component"
import Cursor from "../components/cursor/cursor.component"
import ProjectListContainer from "../components/project-list/project-list.container"
import Tech from "../components/tech/tech.component"


export default () => {

  useEffect(() => {
    NavBarScroll();
  }, []);

  return (
    <WrapperComponent>
      <SEO title="Alfred Asare"/>
      <Cursor />
      <NavBar />
      <Landing />
      <AboutSection />
      <Tech />
      <ProjectListContainer />
      <Footer />
    </WrapperComponent>
  );
};


