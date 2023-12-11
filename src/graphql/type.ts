import type { IMiddleware, IMiddlewareGenerator } from 'graphql-middleware'

export type GqlMiddleware = IMiddleware<any, any, any> | IMiddlewareGenerator<any, any, any>
