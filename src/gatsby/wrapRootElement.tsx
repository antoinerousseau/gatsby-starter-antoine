import type { GatsbyBrowser } from "gatsby"

// import React from "react"

const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
  return element
}

export default wrapRootElement
