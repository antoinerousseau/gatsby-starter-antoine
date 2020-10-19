import type { GatsbyBrowser } from "gatsby"
import { createGlobalStyle } from "styled-components"

import React from "react"

import normalize from "./normalize"
import style from "./style"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${style}
`

const Page: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  // This wrapper is mounted once but re-rendered on page change
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}

export default Page
