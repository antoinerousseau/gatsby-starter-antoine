import "source-map-support/register"
import HttpError from "standard-http-error"
import Bugsnag from "@bugsnag/js"

import dotenv from "dotenv"
dotenv.config()

Bugsnag.start({
  apiKey: process.env.GATSBY_BUGSNAG,
  releaseStage: process.env.NODE_ENV,
  enabledReleaseStages: ["production"],
  appVersion: process.env.COMMIT_REF || "local",
  metadata: {
    deployUrl: process.env.DEPLOY_URL || "local",
  },
})

export const reportError = (error: NodeJS.ErrnoException | Error) =>
  new Promise((resolve, reject) => {
    Bugsnag.notify(error, null, (err, report) => (err ? reject(err) : resolve(report)))
  })

export const respond = (statusCode: number, data: object = null) => ({
  statusCode,
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
})

export const handleError = async (error: HttpError | NodeJS.ErrnoException | Error) => {
  if (error instanceof HttpError) {
    return respond(error.code, { message: error.message })
  } else {
    console.error(error)
    await reportError(error)
    return respond(500)
  }
}
