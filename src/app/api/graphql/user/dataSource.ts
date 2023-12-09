// MongoDB Data Source for Users

import type { Document, InputDocument } from './type'

import { MongoDataSource } from 'apollo-datasource-mongodb'

import { Model } from './model'

export default class DataSource extends MongoDataSource<Document> {
  // Function to fetch all users
  async getAllUsers() {
    try {
      return await Model.find()
    } catch (error) {
      throw new Error('Failed to fetch users')
    }
  }

  async getUserById({ _id }: Document) {
    try {
      return await Model.findById(_id)
    } catch (error) {
      throw new Error('Failed to fetch user by id')
    }
  }

  // Function to create a new user
  async createUser({ input }: InputDocument) {
    try {
      return await Model.create({ ...input })
    } catch (error) {
      throw new Error('Failed to create user')
    }
  }

  // Function to update existing user
  async updateUser({ input }: InputDocument) {
    try {
      const updatedUser = await Model.findByIdAndUpdate(
        input._id,
        { ...input },
        {
          new: true,
        },
      )

      return updatedUser
    } catch (error) {
      throw new Error('Failed to update user')
    }
  }

  // Function to delete existing user
  async deleteUser({ _id }: Partial<Document>): Promise<string> {
    try {
      await Model.findByIdAndDelete(_id)

      return 'User deleted successfully'
    } catch (error) {
      throw new Error('Failed to delete user')
    }
  }
}
