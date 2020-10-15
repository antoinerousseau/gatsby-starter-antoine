import type { GatsbyBrowser } from "gatsby"

// import React from "react"

const Page: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  // This wrapper is mounted once but re-rendered on page change
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
  return element
}

export default Page
