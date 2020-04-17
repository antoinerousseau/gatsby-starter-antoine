# gatsby-starter-antoine

My opinionated [Gatsby.js](https://www.gatsbyjs.org/) starter template.

It starts from [the default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default), and adds:

- [Hot reloading](https://github.com/hot-loader/react-dom)
- [TypeScript](https://www.typescriptlang.org/) & Gatsby types
- [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Netlify](https://www.netlify.com/) config (including TypeScript Netlify functions)
- [Bugsnag](https://www.bugsnag.com/)
- [Styled Components](https://styled-components.com/)

## Requirements

- [Node](https://nodejs.org/) v10+
- [Yarn](https://yarnpkg.com/)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/)

## Usage

    gatsby new [name] https://github.com/antoinerousseau/gatsby-starter-antoine
    cd [name]
    cp {example,}.env

And configure your site infos in `package.json` and `gatsby-config.js`.

## Commands

- `yarn develop`: start development mode
- `yarn lambda`: start Netlify functions in development mode
- `yarn lint`: check linting (Eslint + Prettier)
- `yarn build`: make production bundle
- `yarn serve`: locally serve production bundle
