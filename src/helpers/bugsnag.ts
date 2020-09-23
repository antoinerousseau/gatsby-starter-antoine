import React from "react"
import Bugsnag from "@bugsnag/js"
import BugsnagReact from "@bugsnag/plugin-react"

const apiKey = process.env.GATSBY_BUGSNAG

if (apiKey) {
  Bugsnag.start({
    apiKey,
    releaseStage: process.env.NODE_ENV,
    enabledReleaseStages: ["production"],
    appVersion: process.env.GATSBY_RELEASE,
    metadata: {
      deployDate: process.env.GATSBY_DEPLOY_DATE,
    },
    plugins: [new BugsnagReact(React)],
  })
} else {
  console.warn("Missing Bugsnag API key: no error reporting or boundary are set.")
}

export const ErrorBoundary = apiKey ? Bugsnag.getPlugin("react")?.createErrorBoundary() : null
