import React, { ReactNode } from "react"

import Page from "src/layout/page"

const wrapPageElement = ({ element }): ReactNode => <Page>{element}</Page>

export default wrapPageElement
