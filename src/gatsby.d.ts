type GatsbyLinkProps = import("gatsby").GatsbyLinkProps
type PageProps = import("gatsby").PageProps

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-523352028
type LinkProps = Omit<GatsbyLinkProps<{}>, "ref"> & { exact?: boolean }

type GatsbyPage<DataType = object, PageContextType = object> = React.FC<PageProps<DataType, PageContextType>>
