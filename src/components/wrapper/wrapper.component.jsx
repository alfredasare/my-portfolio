import React, { useEffect } from "react"
import {useDarkMode} from "../../custom-hook/useDarkMode"
import { ThemeProvider } from "styled-components"
import { gsap } from "gsap"
import { GlobalStyle } from "../../utils/Global"
import { Helmet } from "react-helmet"
import { Main } from "./wrapper.styles"
import { darkTheme, defaultTheme } from "../../utils/themes"
import { NavBarScroll } from "../../utils/navbar-scroll"
import Cursor from "../cursor/cursor.component"

const WrapperComponent = ({ children }) => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'default' ? defaultTheme : darkTheme;

  useEffect(() => {
    NavBarScroll();
    gsap.to("main", {visibility: 'visible'});
  }, [mountedComponent])


  return (
    <ThemeProvider theme={themeMode}>
      <Main className="main">
        <GlobalStyle/>
        <Cursor />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
                rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
        </Helmet>
        {children(theme, themeMode, themeToggler)}
      </Main>
    </ThemeProvider>
  )
}

export default WrapperComponent