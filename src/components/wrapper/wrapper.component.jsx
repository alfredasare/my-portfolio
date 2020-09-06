import React, { useEffect } from "react"
import {useDarkMode} from "../../custom-hook/useDarkMode"
import { ThemeProvider } from "styled-components"
import { gsap } from "gsap"
import { GlobalStyle } from "../../utils/Global"
import { Helmet } from "react-helmet"
import { Main } from "./wrapper.styles"
import { darkTheme, defaultTheme } from "../../utils/themes"
import NavBar from "../navbar/navbar.component"

const WrapperComponent = ({ children }) => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'default' ? defaultTheme : darkTheme;

  useEffect(() => {
    gsap.to("main", {visibility: 'visible'});
  }, [theme, mountedComponent])

  return (
    <ThemeProvider theme={themeMode}>
      <Main className="main">
        <GlobalStyle/>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
                rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
        </Helmet>
        <NavBar theme={theme} themeMode={themeMode} toggleTheme={themeToggler}/>
        {children(theme)}
      </Main>
    </ThemeProvider>
  )
}

export default WrapperComponent