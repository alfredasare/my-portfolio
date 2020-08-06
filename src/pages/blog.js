import React from "react"
import WrapperComponent from "../components/wrapper/wrapper.component"
import SEO from "../components/seo"
import Cursor from "../components/cursor/cursor.component"
import NavBar from "../components/navbar/navbar.component"
import BlogHeader from "../components/blog-header/blog-header.component"
import BlogList from "../components/blog-list/blog-list.component"
import Footer from "../components/footer/footer.component"

export default () => {

  return (
    <WrapperComponent>
      <SEO title="Blog Posts" />
      <Cursor />
      <NavBar />
      <div>
          <BlogHeader />
          <BlogList />
      <Footer/>
      </div>
    </WrapperComponent>
  );
}