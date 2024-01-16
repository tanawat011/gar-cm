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
  mutationDeleteSelected?: DocumentNode
  mutationForceDeleteSelected?: DocumentNode
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
  const [createItem, mutateCreateItem] = useMutation(props?.mutationCreate || mutationHealthCheck)
  const [updateItem, mutateUpdateItem] = useMutation(props?.mutationUpdate || mutationHealthCheck)
  const [deleteItem, mutateDeleteItem] = useMutation(props?.mutationDelete || mutationHealthCheck)
  const [forceDeleteItem, mutateForceDeleteItem] = useMutation(props?.mutationForceDelete || mutationHealthCheck)
  const [deleteSelectedItem, mutateDeleteSelectedItem] = useMutation(
    props?.mutationDeleteSelected || mutationHealthCheck,
  )
  const [forceDeleteSelectedItem, mutateForceDeleteSelectedItem] = useMutation(
    props?.mutationForceDeleteSelected || mutationHealthCheck,
  )

  const refetch = async (variables?: Partial<OperationVariables>) => {
    setLoading(true)
    await queryList.refetch(variables)
    setLoading(false)
  }

  return {
    data: queryList.data,
    refetch,
    createItem,
    mutateCreateItem,
    updateItem,
    mutateUpdateItem,
    deleteItem,
    mutateDeleteItem,
    forceDeleteItem,
    mutateForceDeleteItem,
    deleteSelectedItem,
    mutateDeleteSelectedItem,
    forceDeleteSelectedItem,
    mutateForceDeleteSelectedItem,
    loading:
      loading ||
      queryList.loading ||
      mutateCreateItem.loading ||
      mutateUpdateItem.loading ||
      mutateDeleteItem.loading ||
      mutateForceDeleteItem.loading ||
      mutateDeleteSelectedItem.loading ||
      mutateForceDeleteSelectedItem.loading,
  }
}
