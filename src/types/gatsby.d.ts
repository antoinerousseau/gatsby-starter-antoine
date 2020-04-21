type GatsbyLinkProps<S> = import("gatsby").GatsbyLinkProps<S>
type GatsbyPageProps<D, P> = import("gatsby").PageProps<D, P>

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-523352028
type LinkProps<S = {}> = Omit<GatsbyLinkProps<S>, "ref"> & { exact?: boolean }

// https://github.com/gatsbyjs/gatsby/issues/23298
type HistoryLocation<S> = import("history").Location<S>
interface PageProps<D = object, P = object, S = object> extends GatsbyPageProps<D, P> {
  location: Window["location"] & HistoryLocation<S>
}
