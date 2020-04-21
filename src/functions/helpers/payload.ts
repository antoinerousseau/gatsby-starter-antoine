import "source-map-support/register"
import "dotenv/config"
import HttpError from "standard-http-error"
import Bugsnag from "@bugsnag/js"

const apiKey = process.env.GATSBY_BUGSNAG

if (apiKey) {
  Bugsnag.start({
    apiKey,
    releaseStage: process.env.NODE_ENV,
    enabledReleaseStages: ["production"],
    appVersion: process.env.COMMIT_REF || "local",
    metadata: {
      deployUrl: process.env.DEPLOY_URL || "local",
    },
  })
}

export const reportError = (error: NodeJS.ErrnoException | Error) =>
  new Promise((resolve, reject) => {
    console.error(error)
    if (apiKey) {
      Bugsnag.notify(error, null, (err, report) => (err ? reject(err) : resolve(report)))
    } else {
      resolve()
    }
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
    await reportError(error)
    return respond(500)
  }
}
