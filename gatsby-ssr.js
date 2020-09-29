import React from "react"
import RootComponent from "./src/components/root-component/root-component"

export const wrapRootElement = ({ element }) => {
  return (<RootComponent>{element}</RootComponent>)
}