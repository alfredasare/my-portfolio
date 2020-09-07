import React from "react"
import WrapperComponent from "../components/wrapper/wrapper.component"
import SEO from "../components/seo"
import BlogHeader from "../components/blog-header/blog-header.component"
import BlogList from "../components/blog-list/blog-list.component"
import Footer from "../components/footer/footer.component"
import PageTransition from 'gatsby-plugin-page-transitions';

export default () => {

  return (
    <WrapperComponent>
      {
        () => (
          <PageTransition>
            <SEO title="Blog Posts" />
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