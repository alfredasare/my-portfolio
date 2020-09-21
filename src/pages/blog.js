import React from "react"
import WrapperComponent from "../components/wrapper/wrapper.component"
import SEO from "../components/seo"
import BlogHeader from "../components/blog-header/blog-header.component"
import BlogList from "../components/blog-list/blog-list.component"
import Footer from "../components/footer/footer.component"
import PageTransition from 'gatsby-plugin-page-transitions';
import NavBar from "../components/navbar/navbar.component"

export default () => {

  return (
    <WrapperComponent>
      {
        (theme, themeMode, themeToggler) => (
          <PageTransition>
            <SEO title="Blog Posts" />
            <NavBar theme={theme} themeMode={themeMode} toggleTheme={themeToggler}/>
            <div>
              <BlogHeader />
              <BlogList />
              <Footer/>
            </div>
          </PageTransition>
        )
      }
    </WrapperComponent>
  );
}