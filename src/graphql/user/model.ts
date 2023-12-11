import type { Document } from './type'

import mongoose from 'mongoose'

import { REGEXP_EMAIL } from '@/constants'

import { defaultModel } from '../allDefault'

import { COLLECTION_NAME } from './constant'

const { Schema } = mongoose

const schema = new Schema<Omit<Document, '_id'>>({
  email: {
    type: String,
    index: true,
    unique: true,
    required: [true, 'All fields are required'],
    validate: {
      validator: (v: string) => REGEXP_EMAIL.test(v),
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  username: {
    type: String,
    index: true,
    unique: true,
    required: [true, 'All fields are required'],
  },
  password: {
    type: String,
    required: [true, 'All fields are required'],
  },
  firstName: String,
  lastName: String,
  age: Number,
  ...defaultModel,
})

export const Model = mongoose.models[COLLECTION_NAME] || mongoose.model(COLLECTION_NAME, schema)
