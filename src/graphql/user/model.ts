import type { Document } from './type'

import mongoose from 'mongoose'

const { Schema } = mongoose

const schema = new Schema<Omit<Document, '_id'>>({
  username: {
    type: String,
    required: [true, 'All fields are required'],
  },
  password: {
    type: String,
    required: [true, 'All fields are required'],
  },
  firstName: { type: String, required: [true, 'All fields are required'] },
  lastName: {
    type: String,
    required: [true, 'All fields are required'],
  },
  email: {
    type: String,
    required: [true, 'All fields are required'],
  },
  age: Number,
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

export const collectionName = 'users'

export const Model = mongoose.models[collectionName] || mongoose.model(collectionName, schema)
