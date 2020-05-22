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

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const alias = {
    // to avoid relative imports (must match `paths` in `tsconfig.json`):
    src: path.resolve(__dirname, "src"),
  }
  if (stage.startsWith("develop")) {
    // hot reloading:
    alias["react-dom"] = "@hot-loader/react-dom"
  }
  actions.setWebpackConfig({
    resolve: {
      alias,
    },
  })
}
