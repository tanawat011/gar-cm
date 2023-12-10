import type { Document } from './type'

import { MongoDataSource } from 'apollo-datasource-mongodb'

import { Model, collectionName } from '../user'

const errorMessage = (err: unknown) => (err as Error).message

export default class DataSource extends MongoDataSource<Document> {
  async signIn(email: string, password: string) {
    console.log('DataSource.signIn', { email, password })

    try {
      return await Model.findOne().and([{ email }, { password }])
    } catch (err) {
      throw new Error(`Collection ${collectionName}: Failed to fetch all [${errorMessage(err)}]`)
    }
  }
}
