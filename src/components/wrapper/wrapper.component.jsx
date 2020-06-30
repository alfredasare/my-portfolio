import React, { useEffect, useRef } from "react";
import {TweenLite} from "gsap";
import { GlobalStyle } from "../../utils/Global";
import { Helmet } from "react-helmet";
import { Main } from "./wrapper.styles";

const WrapperComponent = ({children}) => {

  let wrapper = useRef(null);

  useEffect(() => {
    TweenLite.to(wrapper, 0, {css: {visibility: 'visible'}});
  }, []);

  return (
    <Main ref={el => {wrapper = el}}>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
      </Helmet>
      {children}
    </Main>
  );
}

export default WrapperComponent;