type Store = import("gatsby").Store
type Cache = import("gatsby").Cache
type GatsbyPage = import("gatsby").Page

export interface GatsbyNode {
  id: string
  parent: string
  children: string[]
  [key: string]: any
  internal: {
    type: string
    contentDigest: string
  }
}

export interface GatsbyActions {
  // createFieldExtension: (def: {name: string; extend: Function; args?: object}) => void
  // addThirdPartySchema: (def: {schema: any}) => void
  createTypes: (def: string) => void
  createPage: (page: GatsbyPage) => void
  deletePage: (page: GatsbyPage) => void
  createNode: (node: GatsbyNode) => void
  createNodeField: (obj: {
    node:GatsbyNode,
    name:string,
    value:string
  }, plugin?:ActionPlugin, actionOptions?:ActionOptions) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}
interface ActionPlugin {
  name: string
}
interface ActionOptions {
  [key: string]: unknown
}
export interface Reporter {
  info: (message: string) => void
  warn: (message: string) => void
  error: (message: string, error?: Error) => void
  panic: (message: string, error?: Error) => void
}

export type GatsbyGraphQL = (taggedQuery: string) => Promise<{ errors: Error; data: any }>

// https://www.gatsbyjs.org/docs/node-apis/#createSchemaCustomization
export type GatsbyCreateSchema = (fns: { actions: GatsbyActions; reporter: Reporter }) => void

// https://www.gatsbyjs.org/docs/node-apis/#sourceNodes
export type GatsbySourceNodes = (fns: {
  actions: GatsbyActions
  store: Store
  cache: Cache["cache"]
  createNodeId: Function
  reporter: Reporter
}) => void

// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
export type GatsbyOnCreateNode = (fns: { node: GatsbyNode; actions: GatsbyActions }) => void

// https://www.gatsbyjs.org/docs/node-apis/#createPages
export type GatsbyCreatePages = (fns: { graphql: GatsbyGraphQL; actions: GatsbyActions }) => void

// https://www.gatsbyjs.org/docs/node-apis/#onCreatePage
export type GatsbyOnCreatePage = (fns: { page: GatsbyPage; actions: GatsbyActions; reporter: Reporter }) => void

// https://www.gatsbyjs.org/docs/node-apis/#onPostBuild
export type GatsbyOnPostBuild = (fns: { graphql: GatsbyGraphQL; actions: GatsbyActions; reporter: Reporter }) => void

// https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody
export type GatsbyOnRenderBody = (fns: {
  pathname: string
  setHeadComponents: (nodes: React.ReactNode) => void
  setHtmlAttributes: (attributes: object) => void
  setBodyAttributes: (attributes: object) => void
  setPreBodyComponents: (nodes: React.ReactNode) => void
  setPostBodyComponents: (nodes: React.ReactNode) => void
  setBodyProps: (props: object) => void
}) => void
