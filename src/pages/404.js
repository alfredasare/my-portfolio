import React from "react"
import SEO from "../components/seo"
import NotFound from "../components/not-found/not-found.component"
import WrapperComponent from "../components/wrapper/wrapper.component"

const NotFoundPage = () => (
  <WrapperComponent>
    {
      (useDarkTheme, setDarkTheme) => (
        <>
          <SEO title="404: Not found" />
          <NotFound />
        </>
      )
    }
  </WrapperComponent>
)

export default NotFoundPage
