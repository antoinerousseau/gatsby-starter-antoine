import HttpError from "standard-http-error"
import Bugsnag from "@bugsnag/js"

import api, { Payload, Query } from "src/helpers/api"

const request = async <T>(method: string, name: string, params?: Payload | Query): Promise<T> =>
  api.request<T>(method, `/.netlify/functions/${name}`, params)

export default {
  get: <T = object>(name: string, params?: Query) => request<T>("GET", name, params),
  post: <T = object>(name: string, params: Payload) => request<T>("POST", name, params),
  put: <T = object>(name: string, params: Payload) => request<T>("PUT", name, params),
  delete: <T = object>(name: string, params: Payload) => request<T>("DELETE", name, params),
}

export const handleError = (error: Error) => {
  if (!(error instanceof HttpError)) {
    Bugsnag.notify(error)
  }
  alert("Erreur : " + error.message)
}
