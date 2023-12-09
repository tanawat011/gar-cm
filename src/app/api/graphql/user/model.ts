import type { Document } from './type'

import mongoose from 'mongoose'

const { Schema } = mongoose

const schema = new Schema<Document>({
  _id: {
    type: Schema.Types.ObjectId,
    required: [true, 'All fields are required'],
  },
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
  age: {
    type: String,
    required: [true, 'All fields are required'],
  },
  active: Boolean,
  createdAt: Date,
  createdBy: String,
  updatedAt: Date,
  updatedBy: String,
  deletedAt: Date,
  deletedBy: String,
})

export const Model = mongoose.models.users || mongoose.model('users', schema)
