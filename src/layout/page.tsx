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

// https://github.com/bugsnag/bugsnag-js/blob/next/packages/plugin-react/src/index.js#L9-L12
interface FallbackProps {
  error: Error
  info?: {
    componentStack: string
  }
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

const Container = styled.div`
  font-family: sans-serif;
  /* Write your custom root CSS here */
`

const Page: React.FC = ({ children }) => (
  <Container>
    <GlobalStyles />
    {ErrorBoundary ? <ErrorBoundary FallbackComponent={ErrorComponent}>{children}</ErrorBoundary> : children}
  </Container>
)

export default Page
