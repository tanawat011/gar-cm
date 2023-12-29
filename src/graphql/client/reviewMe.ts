import { gql } from '@apollo/client'

export const reviewMeList = gql`
  query {
    review {
      id
      review
      name
    }
  }
`

export const reviewMe = gql`
  mutation ($review: String!, $name: String!) {
    reviewMe(review: $review, name: $name) {
      id
    }
  }
`
