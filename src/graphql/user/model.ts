import type { Document } from './type'

import mongoose from 'mongoose'

import { defaultModel } from '../allDefault'

const { Schema } = mongoose

const schema = new Schema<Omit<Document, '_id'>>({
  email: {
    type: String,
    index: true,
    unique: true,
    required: [true, 'All fields are required'],
    validate: {
      validator: (v: string) => {
        return v.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm)
      },
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

export const collectionName = 'users'

export const Model = mongoose.models[collectionName] || mongoose.model(collectionName, schema)
