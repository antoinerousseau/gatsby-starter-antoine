import HttpError from "standard-http-error"
import ERROR_CODES from "standard-http-error/codes"

export type Payload = Record<string, any>
export type Query = Record<string, string>

const queryString = (query: Query) =>
  Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join("&")

const request = async <T>(method: string, url: string, params?: Payload | Query): Promise<T> => {
  const headers = new Headers()
  headers.set("Accept", "application/json")

  const init: RequestInit = {
    method,
  }

  if (params) {
    if (method === "GET") {
      url += "?" + queryString(params)
    } else {
      if (params instanceof FormData) {
        init.body = params
      } else {
        headers.set("Content-Type", "application/json")
        init.body = JSON.stringify(params)
      }
    }
  }

  init.headers = headers

  const response = await fetch(url, init)

  const statusText: string = response.statusText || ERROR_CODES[response.status]

  if (response.status >= 500) {
    throw new HttpError(response.status, statusText)
  }

  const data = await response.json()

  if (response.status >= 400) {
    throw new HttpError(response.status, data.message || statusText)
  }

  return data
}

export default {
  request,
  get: <T = any>(path: string, params?: Query) => request<T>("GET", path, params),
  post: <T = any>(path: string, params: Payload) => request<T>("POST", path, params),
  put: <T = any>(path: string, params: Payload) => request<T>("PUT", path, params),
  delete: <T = any>(path: string, params: Payload) => request<T>("DELETE", path, params),
}
