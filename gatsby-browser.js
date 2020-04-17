/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.wrapPageElement = require("./src/gatsby/wrapPageElement").default
exports.onClientEntry = require("./src/gatsby/onClientEntry").default
