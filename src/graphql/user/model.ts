import type { Document } from './type'

import mongoose from 'mongoose'

import { defaultModel } from '../allDefault'

import { COLLECTION_NAME } from './constant'

const { Schema } = mongoose

const schema = new Schema<Omit<Document, '_id'>>({
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  age: Number,
  ...defaultModel,
})

export const Model = mongoose.models[COLLECTION_NAME] || mongoose.model(COLLECTION_NAME, schema)
