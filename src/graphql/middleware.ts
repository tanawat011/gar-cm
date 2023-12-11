import type { GqlMiddleware } from './type'

export const metricsMiddleware: GqlMiddleware = async (resolve, root, args, context, info) => {
  return resolve(root, args, context, info)
}

export const authMiddleware: GqlMiddleware = async (resolve, root, args, context, info) => {
  return resolve(root, args, context, info)
}
