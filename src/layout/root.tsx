import type { GatsbyBrowser } from "gatsby"

// import React from "react"

const Root: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
  return element
}

export default Root
