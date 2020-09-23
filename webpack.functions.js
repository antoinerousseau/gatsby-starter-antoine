const nodeExternals = require("webpack-node-externals")

module.exports = {
  externals: [nodeExternals()],
  devtool: "inline-source-map",
}
