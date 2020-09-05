import React, { useEffect, useRef, useState } from "react"
import { ThemeProvider } from "styled-components"
import { TweenLite } from "gsap"
import { GlobalStyle } from "../../utils/Global"
import { Helmet } from "react-helmet"
import { Main } from "./wrapper.styles"
import { darkTheme, defaultTheme } from "../../utils/themes"
import NavBar from "../navbar/navbar.component"

const WrapperComponent = ({ children }) => {

  let wrapper = useRef(null)
  const [theme, setCurrentTheme] = useState(typeof window !== `undefined` ? window.localStorage.getItem("theme") || "default": "");

  const setTheme = () => {
    if (typeof window !== `undefined`) {
      if (window.localStorage.getItem("theme") === "default") {
        setCurrentTheme("dark")
        window.localStorage.setItem("theme", "dark")
      } else {
        setCurrentTheme("default")
        window.localStorage.setItem("theme", "default")
      }
    }
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.localStorage.getItem("theme") || window.localStorage.setItem("theme", "default");
    }
    TweenLite.to(wrapper, 0, { css: { visibility: "visible" } })
  }, [])

  return (
    <ThemeProvider theme={theme === "default" ? defaultTheme : darkTheme}>
      <Main ref={el => {
        wrapper = el
      }}>
        <GlobalStyle/>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
                rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
        </Helmet>
        <NavBar theme={theme} toggleTheme={setTheme}/>
        {children(theme)}
      </Main>
    </ThemeProvider>
  )
}

export default WrapperComponent