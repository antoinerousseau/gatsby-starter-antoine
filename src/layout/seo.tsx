import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export interface Props {
  title?: string
  noindex?: boolean
  description?: string
  url?: string
  image?: string
}

const SEO: React.FC<Props> = ({ title, noindex, description, url, image }) => {
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          locale
          keywords
        }
      }
    }
  `)

  const htmlAttr = {
    lang: data.locale.substr(0, 2),
  }
  const pageTitle = title ? `${title} | ${data.title}` : data.title

  return (
    <Helmet htmlAttributes={htmlAttr}>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="description" property="og:description" content={description || data.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="keywords" content={data.keywords.join(", ")} />
      <meta property="og:locale" content={data.locale} />
      <meta property="og:site_name" content={data.title} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}

export default SEO
