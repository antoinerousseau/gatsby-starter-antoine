/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.sourceNodes = require("./src/gatsby/sourceNodes").default
exports.onCreateNode = require("./src/gatsby/onCreateNode").default
exports.onCreatePage = require("./src/gatsby/onCreatePage").default
exports.createPages = require("./src/gatsby/createPages").default
exports.onPostBuild = require("./src/gatsby/onPostBuild").default

// hot reloading:
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const alias = {
    src: path.resolve(__dirname, "src"),
  }
  if (stage.startsWith("develop")) {
    alias["react-dom"] = "@hot-loader/react-dom"
  }
  actions.setWebpackConfig({
    resolve: {
      alias,
    },
  })
}
