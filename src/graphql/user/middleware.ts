import type { GqlMiddleware } from '../type'

import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import addFormats from 'ajv-formats'

import { REGEXP_EMAIL, REGEXP_PASSWORD } from '@/constants'

import { RESOLVER } from './constant'

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
addErrors(ajv)

ajv.addFormat('email', REGEXP_EMAIL)
ajv.addFormat('password', REGEXP_PASSWORD)

export const middleware: GqlMiddleware = {
  Mutation: {
    [RESOLVER.CREATE]: async (resolve, root, args, ctx, info) => {
      const validate = ajv.compile({
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email',
            errorMessage: 'Email is not a valid',
          },
          username: {
            type: 'string',
          },
          password: {
            type: 'string',
            minLength: 8,
            maxLength: 16,
            format: 'password',
            errorMessage: 'Password is not a valid',
          },
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          age: {
            type: 'number',
          },
        },
        required: ['email', 'username', 'password'],
      })

      const valid = validate(args.input)

      if (!valid) {
        throw new Error(validate.errors?.[0].message)
      }

      return resolve(root, args, ctx, info)
    },
  },
}
