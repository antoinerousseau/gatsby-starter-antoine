import type { GatsbyConfig } from "gatsby"

import path from "path"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Starter Antoine`,
    description: `My opinionated Gatsby.js starter template`,
    locale: `fr_FR`,
    siteUrl: `https://gatsby-starter-antoine.netlify.app`,
    keywords: ["gatsby", "starter", "gatsby.js", "template", "antoine", "antoinerousseau", "typescript"],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "../images"),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 75,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Antoine`,
        short_name: `gatsby-starter-antoine`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}

export default config
