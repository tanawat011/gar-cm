import type { GqlMiddleware } from '../type'

import { RESOLVER } from './constant'

export const middleware: GqlMiddleware = {
  Mutation: {
    [RESOLVER.CREATE]: async (resolve, root, args, ctx, info) => {
      return resolve(root, args, ctx, info)
    },
  },
}
