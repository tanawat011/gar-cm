import type { DocumentNode } from '@apollo/client'

import { gql, useMutation, useQuery } from '@apollo/client'

type UseGqlCrudProps = {
  queryList?: DocumentNode
  queryItem?: DocumentNode
  mutationCreate?: DocumentNode
  mutationUpdate?: DocumentNode
  mutationDelete?: DocumentNode
  mutationForceDelete?: DocumentNode
}

export const queryHealthCheck = gql`
  query {
    ok
  }
`

export const mutationHealthCheck = gql`
  mutation {
    ok
  }
`

export const useGqlCrud = (props: UseGqlCrudProps) => {
  const queryList = useQuery(props?.queryList || queryHealthCheck)
  const queryItem = useQuery(props?.queryItem || queryHealthCheck)
  const [createItem, mutateCreateItem] = useMutation(props?.mutationCreate || mutationHealthCheck)
  const [updateItem, mutateUpdateItem] = useMutation(props?.mutationUpdate || mutationHealthCheck)
  const [deleteItem, mutateDeleteItem] = useMutation(props?.mutationDelete || mutationHealthCheck)
  const [forceDeleteItem, mutateForceDeleteItem] = useMutation(props?.mutationForceDelete || mutationHealthCheck)

  return {
    dataList: queryList.data,
    refetchList: queryList.refetch,
    dataItem: queryItem.data,
    refetchItem: queryItem.refetch,
    queryItem,
    createItem,
    mutateCreateItem,
    updateItem,
    mutateUpdateItem,
    deleteItem,
    mutateDeleteItem,
    forceDeleteItem,
    mutateForceDeleteItem,
    loading:
      queryList.loading ||
      queryItem.loading ||
      mutateCreateItem.loading ||
      mutateUpdateItem.loading ||
      mutateDeleteItem.loading ||
      mutateForceDeleteItem.loading,
  }
}
