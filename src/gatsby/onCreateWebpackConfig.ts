import type { GatsbyNode } from "gatsby"

import path from "path"

const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ stage, actions }) => {
  const alias = {
    // to avoid relative imports (must match `paths` in `tsconfig.json`):
    src: path.resolve(__dirname, ".."),
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

export default onCreateWebpackConfig
