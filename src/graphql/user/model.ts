import type { Document } from './type'

import mongoose from 'mongoose'

const { Schema } = mongoose

const schema = new Schema<Omit<Document, '_id'>>({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: [true, 'All fields are required'],
    validate: {
      validator: (v: any) => {
        console.log('v', v)

        return true
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
    // validate: {
    //   as
    //   isAsync: true,
    //   validator: (v, cb) => cb(validator.isEmail(v), `${v} is not a valid email address`),
    // },
  },
  username: {
    type: String,
    unique: true,
    trim: true,
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
