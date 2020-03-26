import React, { ReactNode } from "react"

import Root from "src/layout/root"

const wrapPageElement = ({ element }): ReactNode => <Root>{element}</Root>

export default wrapPageElement
