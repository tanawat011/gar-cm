import type { Document } from './type'

import mongoose from 'mongoose'

import { defaultModel } from '../allDefault'

const { Schema } = mongoose

const schema = new Schema<Omit<Document, '_id'>>({
  title: {
    type: String,
    required: [true, 'All fields are required'],
  },
  detail: String,
  status: { type: String, required: [true, 'All fields are required'] },
  ...defaultModel,
})

export const collectionName = 'todos'

export const Model = mongoose.models[collectionName] || mongoose.model(collectionName, schema)
