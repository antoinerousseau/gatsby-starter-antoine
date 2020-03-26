/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapper from "src/gatsby/wrapPageElement"
import entry from "src/gatsby/onClientEntry"

export const wrapPageElement = wrapper
export const onClientEntry = entry
