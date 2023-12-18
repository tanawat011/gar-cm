import { builder } from './builder'
import './types/auth'
import './types/users'

export const schema = builder.toSchema()
