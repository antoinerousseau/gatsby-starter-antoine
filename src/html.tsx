import * as React from "react"

interface Props {
  htmlAttributes?: React.HtmlHTMLAttributes<HTMLHtmlElement>
  headComponents?: React.ReactNode
  bodyAttributes?: React.HTMLAttributes<HTMLBodyElement>
  preBodyComponents?: React.ReactNode
  body: string
  postBodyComponents?: React.ReactNode
}

const HTML: React.FC<Props> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
)

export default HTML
