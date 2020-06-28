import React from "react"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import "../page-styles/index/index.styles"
import Landing from "../components/landing/landing.component"
import NavBar from "../components/navbar/navbar.component"
import Footer from "../components/footer/footer.component"
import "../utils/navbar-scroll";


export default () => (
  <Wrapper>
    <SEO title="Alfred Asare"/>
    <NavBar />
    <Landing />
    <Footer />
  </Wrapper>
)


