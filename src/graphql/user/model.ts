import type { Document } from './type'

import mongoose from 'mongoose'

import { REGEXP_PASSWORD, REGEXP_EMAIL } from '@/constants'

import { defaultModel } from '../allDefault'

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
    validate: {
      validator: (v: string) => REGEXP_PASSWORD.test(v),
      message: () => 'Your password is not a valid',
    },
  },
  firstName: String,
  lastName: String,
  age: Number,
  ...defaultModel,
})

export const collectionName = 'users'

export const Model = mongoose.models[collectionName] || mongoose.model(collectionName, schema)
