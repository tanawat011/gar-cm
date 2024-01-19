import { gql } from '@apollo/client'

export const queryLinkRemembers = gql`
  query ($search: String, $page: Int, $limit: Int) {
    linkRemembers(search: $search, page: $page, limit: $limit) {
      count
      data {
        id
        name
        link
        createdAt
        updatedAt
        deletedAt
      }
    }
  }
`

export const mutationCreateLinkRemember = gql`
  mutation ($name: String!, $link: String!) {
    createLinkRemember(name: $name, link: $link) {
      id
      name
      link
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const mutationUpdateLinkRemember = gql`
  mutation ($id: String!, $name: String, $link: String) {
    updateLinkRemember(id: $id, name: $name, link: $link) {
      id
      name
      link
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const mutationDeleteLinkRemember = gql`
  mutation ($id: String!) {
    deleteLinkRemember(id: $id) {
      id
    }
  }
`

export const mutationForceDeleteLinkRemember = gql`
  mutation ($id: String!) {
    forceDeleteLinkRemember(id: $id) {
      id
    }
  }
`

export const mutationDeleteSelectedLinkRemember = gql`
  mutation ($ids: [String!]!) {
    deleteSelectedLinkRemember(ids: $ids) {
      ids
    }
  }
`

export const mutationForceDeleteSelectedLinkRemember = gql`
  mutation ($ids: [String!]!) {
    forceDeleteSelectedLinkRemember(ids: $ids) {
      ids
    }
  }
`
