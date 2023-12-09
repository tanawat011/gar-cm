import type { ObjectId } from 'mongoose'

export type Document = {
  _id: ObjectId
  username: string
  password: string
  email: string
  firstName: string
  lastName: string
  age?: number
  active: boolean
  createdAt: Date
  createdBy: string
  updatedAt: Date
  updatedBy: string
  deletedAt?: Date
  deletedBy?: string
}

export type InputDocument = { input: Document }
