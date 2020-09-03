// convenience type:
declare type GatsbyPage<DataType = unknown, PageContextType = unknown, StateType = unknown> = React.FC<
  import("gatsby").PageProps<DataType, PageContextType, StateType | null>
>

declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-523352028
declare type LinkProps<S = unknown> = Omit<import("gatsby").GatsbyLinkProps<S>, "ref"> & { exact?: boolean }
