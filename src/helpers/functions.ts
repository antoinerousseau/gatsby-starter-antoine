import HttpError from "standard-http-error"

import api, { Payload, Query } from "src/helpers/api"
import bugsnag from "src/helpers/bugsnag"

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
    bugsnag.notify(error)
  }
  alert("Erreur : " + error.message)
}
