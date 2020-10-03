import React, { useEffect } from "react"
import SEO from "../components/seo"
import WrapperComponent from "../components/wrapper/wrapper.component"
import Landing from "../components/landing/landing.component"
import Footer from "../components/footer/footer.component"
import AboutSection from "../components/about-section/about-section.component"
import ProjectListContainer from "../components/project-list/project-list.container"
import Tech from "../components/tech/tech.component"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PageTransition from 'gatsby-plugin-page-transitions';
import BlogSection from "../components/blog-section/blog-section.component"
import NavBar from "../components/navbar/navbar.component"

export default () => {

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
  }, [])

  return (
    <WrapperComponent>
      {
        (theme, themeMode, themeToggler) => (
          <PageTransition>
            <SEO title="Frontend Web Developer"/>
            <NavBar theme={theme} themeMode={themeMode} toggleTheme={themeToggler}/>
            <Landing/>
            <AboutSection/>
            <Tech/>
            <ProjectListContainer theme={theme}/>
            <BlogSection />
            <Footer/>
          </PageTransition>
        )
      }
    </WrapperComponent>
  )
};


