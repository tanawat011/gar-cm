import type { Document, InputDocument, InputPartialDocument } from './type'

import { MongoDataSource } from 'apollo-datasource-mongodb'

import { Model, collectionName } from './model'

const errorMessage = (err: unknown) => (err as Error).message

export default class DataSource extends MongoDataSource<Document> {
  async getAll() {
    try {
      return await Model.find().where('active').equals(true)
    } catch (error) {
      throw new Error(`Collection ${collectionName}: Failed to fetch all`)
    }
  }

  async getById(_id: string) {
    try {
      return await Model.findById(_id)
    } catch (error) {
      throw new Error(`Collection ${collectionName}: Failed to fetch by id`)
    }
  }

  async createItem({ input }: InputDocument) {
    try {
      return await Model.create<Document>({
        ...input,
        createdBy: 'admin',
        updatedBy: 'admin',
      })
    } catch (err) {
      throw new Error(`Collection ${collectionName}: Failed to create item [${errorMessage(err)}]`)
    }
  }

  async updateItem(_id: Document['_id'], { input }: InputPartialDocument) {
    try {
      const updated = await Model.findByIdAndUpdate<Document>(
        _id,
        {
          ...input,
          updatedAt: new Date(),
          updatedBy: 'admin',
        },
        {
          new: true,
        },
      )

      return updated
    } catch (err) {
      throw new Error(`Collection ${collectionName}: Failed to update item [${errorMessage(err)}]`)
    }
  }

  async deleteItem({ _id }: Partial<Document>) {
    try {
      await Model.findByIdAndUpdate<Document>(_id, {
        active: false,
        deletedAt: new Date(),
        deletedBy: 'admin',
      })
    } catch (err) {
      throw new Error(`Collection ${collectionName}: Failed to update item [${errorMessage(err)}]`)
    }
  }

  async deletePermanentlyItem({ _id }: Partial<Document>): Promise<string> {
    try {
      await Model.findByIdAndDelete(_id)

      return 'Item permanently deleted successfully'
    } catch (err) {
      throw new Error(`Collection ${collectionName}: Failed to delete item [${errorMessage(err)}]`)
    }
  }
}
