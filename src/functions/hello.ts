import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

import HttpError from "standard-http-error"

import { respond, handleError } from "./helpers/payload"

export const handler = async (request: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (request.httpMethod !== "POST") {
      throw new HttpError(400, "Method not supported")
    }

    return respond(200)
  } catch (error) {
    return handleError(error)
  }
}
