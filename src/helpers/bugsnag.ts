import React from "react"
import bugsnagJs from "@bugsnag/js"
import bugsnagReact from "@bugsnag/plugin-react"
import Report from "@bugsnag/browser/dist/types/bugsnag-core/report"

const beforeSend = (report: Report) => report.errorClass !== "ChunkLoadError"

const bugsnag = bugsnagJs({
  apiKey: process.env.GATSBY_BUGSNAG,
  releaseStage: process.env.NODE_ENV,
  notifyReleaseStages: ["production"],
  appVersion: process.env.GATSBY_RELEASE,
  metaData: {
    deployUrl: process.env.GATSBY_DEPLOY_URL,
    deployDate: process.env.GATSBY_DEPLOY_DATE,
  },
  collectUserIp: false,
  beforeSend,
})
bugsnag.use(bugsnagReact, React)

export const ErrorBoundary = bugsnag.getPlugin("react")

export default bugsnag
