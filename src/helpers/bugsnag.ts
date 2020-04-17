import * as React from "react"
import Bugsnag from "@bugsnag/js"
import BugsnagReact from "@bugsnag/plugin-react"

Bugsnag.start({
  apiKey: process.env.GATSBY_BUGSNAG,
  releaseStage: process.env.NODE_ENV,
  enabledReleaseStages: ["production"],
  appVersion: process.env.GATSBY_RELEASE,
  metadata: {
    deployUrl: process.env.GATSBY_DEPLOY_URL,
    deployDate: process.env.GATSBY_DEPLOY_DATE,
  },
  plugins: [new BugsnagReact(React)],
})

export const ErrorBoundary = Bugsnag.getPlugin("react")
