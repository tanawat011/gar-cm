import type { DefaultType } from '../allDefault'
import type { ObjectId } from 'mongoose'

export type Document = {
  _id: ObjectId
  title: string
  detail: string
  status: 'new' | 'in-progress' | 'done' | 'cancel'
} & DefaultType

export type InputDocument = { input: Document }
export type InputPartialDocument = { input: Partial<Omit<Document, '_id'>> & { _id: Document['_id'] } }