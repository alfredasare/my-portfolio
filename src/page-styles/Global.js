import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
        font-size: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
    }
    
    h1,h2,h3,h4,h5,h6 {
    margin: 0;
    }
    
    a {
        text-decoration: none;
    }
    
    .active {
        
    }
    
    .hide-overflow {
      overflow-y: hidden;
    }
    
    @keyframes fade-in {
      from{
          opacity: 0;
      }
      to{
          opacity: 1;
      }
  }
`