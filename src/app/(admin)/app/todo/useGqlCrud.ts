import type { DocumentNode, OperationVariables } from '@apollo/client'

import { useState } from 'react'

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
  const [loading, setLoading] = useState(false)
  const queryList = useQuery(props?.queryList || queryHealthCheck)
  const queryItem = useQuery(props?.queryItem || queryHealthCheck)
  const [createItem, mutateCreateItem] = useMutation(props?.mutationCreate || mutationHealthCheck)
  const [updateItem, mutateUpdateItem] = useMutation(props?.mutationUpdate || mutationHealthCheck)
  const [deleteItem, mutateDeleteItem] = useMutation(props?.mutationDelete || mutationHealthCheck)
  const [forceDeleteItem, mutateForceDeleteItem] = useMutation(props?.mutationForceDelete || mutationHealthCheck)

  const refetchList = async (variables?: Partial<OperationVariables>) => {
    setLoading(true)
    await queryList.refetch(variables)
    setLoading(false)
  }

  const refetchItem = async (variables?: Partial<OperationVariables>) => {
    setLoading(true)
    await queryItem.refetch(variables)
    setLoading(false)
  }

  return {
    dataList: queryList.data,
    refetchList,
    dataItem: queryItem.data,
    refetchItem,
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
      loading ||
      queryList.loading ||
      queryItem.loading ||
      mutateCreateItem.loading ||
      mutateUpdateItem.loading ||
      mutateDeleteItem.loading ||
      mutateForceDeleteItem.loading,
  }
}
