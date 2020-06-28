import React from "react"
import { GlobalStyle } from "../utils/Global"
import { Helmet } from "react-helmet"

const Wrapper = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
      </Helmet>
      {children}
    </>
  );
}

export default Wrapper;