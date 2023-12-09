import type { ObjectId } from 'mongoose'

export type Document = {
  _id: ObjectId
  title: string
  detail: string
  status: 'new' | 'in-progress' | 'done' | 'cancel'
  active: boolean
  createdAt: Date
  createdBy: string
  updatedAt: Date
  updatedBy: string
  deletedAt?: Date
  deletedBy?: string
}

export type InputDocument = { input: Document }
