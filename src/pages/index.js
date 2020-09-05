import React, { useEffect } from "react"
import SEO from "../components/seo"
import WrapperComponent from "../components/wrapper/wrapper.component"
import Landing from "../components/landing/landing.component"
import Footer from "../components/footer/footer.component"
import { NavBarScroll } from "../utils/navbar-scroll"
import AboutSection from "../components/about-section/about-section.component"
import Cursor from "../components/cursor/cursor.component"
import ProjectListContainer from "../components/project-list/project-list.container"
import Tech from "../components/tech/tech.component"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export default () => {

  useEffect(() => {
    NavBarScroll();

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
  }, [])

  return (
    <WrapperComponent>
      {
        (theme) => (
          <>
            <SEO title="Alfred Asare"/>
            <Cursor/>
            <Landing/>
            <AboutSection/>
            <Tech/>
            <ProjectListContainer theme={theme}/>
            <Footer/>
          </>
        )
      }
    </WrapperComponent>
  )
};


