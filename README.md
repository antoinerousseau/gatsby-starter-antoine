# gatsby-starter-antoine

My opinionated [Gatsby.js](https://www.gatsbyjs.org/) starter template.

It starts from [the default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default), and adds:

- [Hot reloading](https://github.com/gatsbyjs/gatsby/pull/26664) with [fast-refresh](https://reactnative.dev/docs/fast-refresh)
- [TypeScript](https://www.typescriptlang.org/) & Gatsby types
- [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Bugsnag](https://www.bugsnag.com/)
- [Styled Components](https://styled-components.com/)
- `src` [import alias](https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9)

## Requirements

- [Node](https://nodejs.org/) v10+
- [Yarn](https://yarnpkg.com/)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/)

## Usage

    gatsby new [name] https://github.com/antoinerousseau/gatsby-starter-antoine
    cd [name]
    cp {example,}.env

And configure your site infos in `package.json` and `src/gatsby/config.ts`.

## Commands

- `yarn develop`: start development mode
- `yarn lint`: check linting (Eslint + Prettier)
- `yarn build`: make production bundle
- `yarn serve`: locally serve production bundle

## Netlify

If you use [Netlify](https://www.netlify.com/), you can also directly have a TypeScript-ready setup, including Netlify functions (lambdas), by using [the netlify branch](https://github.com/antoinerousseau/gatsby-starter-antoine/tree/netlify), e.g.:

    gatsby new [name] https://github.com/antoinerousseau/gatsby-starter-antoine#netlify
