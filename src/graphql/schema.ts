import { builder } from './builder'
import './linkRemember/type'
import './reviewMe/type'
import './todo/type'
import './user/type'

export const schema = builder.toSchema()
