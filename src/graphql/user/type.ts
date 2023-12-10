import type { DefaultType } from '../allDefault'
import type { ObjectId } from 'mongoose'

export type Document = {
  _id: ObjectId
  username: string
  password: string
  email: string
  firstName?: string
  lastName?: string
  age?: SVGAnimatedNumber
} & DefaultType

export type InputDocument = { input: Document }
export type InputPartialDocument = { input: Partial<Omit<Document, '_id'>> & { _id: Document['_id'] } }
