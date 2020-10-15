import type { GatsbyBrowser } from "gatsby"

import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import normalize from "./normalize"
import style from "./style"
import { ErrorBoundary } from "src/helpers/bugsnag"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${style}
`

const ErrorContainer = styled.div`
  padding: 40px 20px;
  h1 {
    color: #e10f14;
  }
`

// https://github.com/bugsnag/bugsnag-js/blob/v7.1.0/packages/plugin-react/types/bugsnag-plugin-react.d.ts
interface FallbackProps {
  error: Error
  info: React.ErrorInfo
  clearError: () => void
}

const ErrorComponent: React.FC<FallbackProps> = () => (
  <ErrorContainer>
    <h1>
      <span aria-hidden>🐞</span>
      <br />
      An error happened.
    </h1>
    <h2>Try reloading the page.</h2>
  </ErrorContainer>
)

const Root: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  // This wrapper is mounted once and does not re-render on page change
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
  return (
    <>
      <GlobalStyles />
      {ErrorBoundary ? <ErrorBoundary FallbackComponent={ErrorComponent}>{element}</ErrorBoundary> : element}
    </>
  )
}

export default Root
