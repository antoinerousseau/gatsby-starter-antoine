require("dotenv").config()
require("ts-node").register({
  files: true, // so that TS node hooks have access to local typings too
})

if (!process.env.GATSBY_BUGSNAG) {
  console.warn("Bugsnag requires an API key. Did you mean to add it?")
}
if (!process.env.TZ) {
  console.warn("You should define a timezone through a TZ environment variable.")
}

// we need these in the browser for Bugsnag:
process.env.GATSBY_DEPLOY_URL = process.env.DEPLOY_URL || "local" // from Netlify
process.env.GATSBY_RELEASE = process.env.COMMIT_REF || "local" // from Netlify
process.env.GATSBY_DEPLOY_DATE = new Date().toString()

module.exports = require("./src/gatsby/config").default
