import { gql } from '@apollo/client'

export const queryUserRoles = gql`
  query {
    userRoles {
      roles
    }
  }
`
