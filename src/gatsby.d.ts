type GatsbyLinkProps = import("gatsby").GatsbyLinkProps
type NavigateFn = import("@reach/router").NavigateFn
type HistoryLocation = import("history").Location

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-523352028
type FixedLinkProps = Omit<GatsbyLinkProps<{}>, "ref">
type LinkProps = FixedLinkProps & { exact?: boolean }

interface GatsbyPageProps<S> {
  data: any
  uri: string
  path: string
  pageContext: {
    [key: string]: any
  }
  location: Window["location"] & HistoryLocation<S>
  navigate: NavigateFn
}

type GatsbyPage<S = {}> = React.FC<GatsbyPageProps<S>>

declare const graphql: (query: TemplateStringsArray) => void
