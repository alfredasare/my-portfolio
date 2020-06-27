import React from "react"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import "../page-styles/index/index.styles"
import Landing from "../components/landing/landing.component"
import NavBar from "../components/navbar/navbar.component"


export default () => (
  <Wrapper>
    <SEO title="Alfred Asare"/>
    <NavBar />
    <Landing />
  </Wrapper>
)


