require("dotenv").config()

if (!process.env.GATSBY_BUGSNAG) {
  throw new Error("Missing GATSBY_BUGSNAG environment variable. Did you create a .env file?")
}

const { createProxyMiddleware } = require("http-proxy-middleware")

// we need these in the browser for Bugsnag:
process.env.GATSBY_DEPLOY_URL = process.env.DEPLOY_URL || "local" // from Netlify
process.env.GATSBY_RELEASE = process.env.COMMIT_REF || "local" // from Netlify
process.env.GATSBY_DEPLOY_DATE = new Date().toString()

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Antoine`,
    description: `My opinionated Gatsby.js starter template`,
    locale: `fr_FR`,
    siteUrl: `https://yoursite.netlify.com`,
    keywords: ["gatsby", "starter", "gatsby.js", "template", "antoine", "antoinerousseau", "typescript"],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-netlify`,
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
  developMiddleware: (app) => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
}
