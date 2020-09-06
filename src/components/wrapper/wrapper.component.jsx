import React, { useEffect, useRef, useState } from "react"
import { window } from "browser-monads"
import { ThemeProvider } from "styled-components"
import { TweenLite } from "gsap"
import { GlobalStyle } from "../../utils/Global"
import { Helmet } from "react-helmet"
import { Main } from "./wrapper.styles"
import { darkTheme, defaultTheme } from "../../utils/themes"
import NavBar from "../navbar/navbar.component"

const WrapperComponent = ({ children }) => {
  let wrapper = useRef(null)
  let initialTheme = window.localStorage.getItem("theme");
  const [theme, setCurrentTheme] = useState(initialTheme)

  const setTheme = () => {
    if (window.localStorage.getItem("theme") === "default" || window.localStorage.getItem("theme") === null) {
      setCurrentTheme("dark")
      window.localStorage.setItem("theme", "dark")
    } else if (window.localStorage.getItem("theme") === "dark"){
      setCurrentTheme("default")
      window.localStorage.setItem("theme", "default")
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "default" || window.localStorage.getItem("theme") === null) {
      window.localStorage.setItem("theme", "default")
    } else if (window.localStorage.getItem("theme") === "dark") {
      setCurrentTheme("dark")
      window.localStorage.setItem("theme", "dark")
      console.log(window.localStorage.getItem("theme"));
    }
    TweenLite.to(wrapper, 0, { css: { visibility: "visible" } })
  }, [setCurrentTheme, theme])

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : defaultTheme}>
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