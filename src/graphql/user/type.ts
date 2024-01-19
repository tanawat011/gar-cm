import axios from 'axios'

import { builder } from '../builder'

export class UserRoles {
  roles: string[]

  constructor(roles: string[]) {
    this.roles = roles
  }
}

builder.objectType(UserRoles, {
  name: 'userRoles',
  description: 'User roles',
  fields: (t) => ({
    roles: t.exposeStringList('roles', {}),
  }),
})

// Query
builder.queryField('userRoles', (t) => {
  return t.field({
    type: UserRoles,
    resolve: async (_parent, _args, ctx) => {
      const userId = ctx?.user?.sub

      const url = `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${userId}/roles`

      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.AUTH0_API_TOKEN}${process.env.AUTH0_API_TOKEN2}`,
        },
      })

      return {
        roles: data.map((item: { name: string }) => item.name),
      }
    },
  })
})
