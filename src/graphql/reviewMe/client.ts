import { gql } from '@apollo/client'

export const reviewMeList = gql`
  query ($search: String, $page: Int, $limit: Int) {
    reviewMeList(search: $search, page: $page, limit: $limit) {
      count
      data {
        review
        name
        id
        createdAt
        updatedAt
        deletedAt
      }
    }
  }
`
