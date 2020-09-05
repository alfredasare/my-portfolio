import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
        font-size: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
        cursor: url("data:image/svg+xml,%3Csvg height='12' width='12' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7' cy='7' fill='%23FF6553' r='7'/%3E%3C/svg%3E") 6 6, auto;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${({theme}) => theme.backgroundColor};
    }
    
    h1,h2,h3,h4,h5,h6 {
      margin: 0;
    }
    
    a {
      text-decoration: none;
      margin: -0.125rem -0.375rem;
      padding: 0.225rem 0.475rem;
      border-radius: 0.25rem;
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
    
  .cursor {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: var(--width);
    height: var(--height);
    transform: translate(calc(var(--x) - var(--width) / 2), calc(var(--y) - var(--height) / 2));
    transition-duration: 125ms;
    transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    transition-property: width, height, transform;
    transition: 150ms width cubic-bezier(0.39, 0.575, 0.565, 1),
    150ms height cubic-bezier(0.39, 0.575, 0.565, 1),
    150ms transform cubic-bezier(0.39, 0.575, 0.565, 1);
    z-index: 9999;
    pointer-events: none;
    will-change: transform;
  }
  
  @media (pointer: fine) {
      .cursor {
          display: block;
      }
  }
  .cursor::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: var(--radius);
      border: 2px solid ${({theme}) => theme.primaryColor};
      opacity: var(--scale);
      -webkit-transform: scale(var(--scale));
      transform: scale(var(--scale));
      transition: 300ms opacity cubic-bezier(0.39, 0.575, 0.565, 1),
      300ms transform cubic-bezier(0.39, 0.575, 0.565, 1),
      150ms border-radius cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  
  .st0{
    fill: #2e001e
  }
  
  .st1{
    fill: #ff2bc2
  }
  
  .viewport {
  margin: 0 0 0 0;
  width: 100vw;
  overflow-x: hidden;
  position: fixed;
}
`