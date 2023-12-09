import type { Document } from './type'

import mongoose from 'mongoose'

const { Schema } = mongoose

const schema = new Schema<Omit<Document, '_id'>>({
  title: {
    type: String,
    required: [true, 'All fields are required'],
  },
  detail: String,
  status: { type: String, required: [true, 'All fields are required'] },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: String,
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  updatedBy: String,
  deletedAt: Date,
  deletedBy: String,
})

export const collectionName = 'todos'

export const Model = mongoose.models[collectionName] || mongoose.model(collectionName, schema)
