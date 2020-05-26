import type { GatsbySSR } from "gatsby"

// import React from "react"

const onRenderBody: GatsbySSR["onRenderBody"] = () => {
  // https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody
  return null // https://github.com/gatsbyjs/gatsby/issues/24229
}

export default onRenderBody
