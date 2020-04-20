import React from "react"
import styled from "styled-components"

import SEO, { Props as SEOProps } from "./seo"
import Header from "./header"
import Footer from "./footer"

const Main = styled.main``

const Layout: React.FC<SEOProps> = ({ children, ...props }) => (
  <>
    <SEO {...props} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
