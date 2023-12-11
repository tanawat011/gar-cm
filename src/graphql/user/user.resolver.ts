import type { Model } from '.'

import mongoose from 'mongoose'
import { Query, Resolver, Mutation, Arg } from 'type-graphql'

import { UserCreate, User } from './user.schema'

const schema = new mongoose.Schema({
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
  // ...defaultModel,
})

@Resolver(() => User)
export class UsersResolver {
  private users: User[] = []

  constructor(private model: typeof Model) {}

  @Query(() => [User])
  async getUsers(root, args, ctx): Promise<User[]> {
    const user = new this.model<User>({
      _id: '1',
      username: 'username',
      password: 'password',
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      age: 1,
      active: true,
      createdAt: new Date(),
      createdBy: 'createdBy',
      updatedAt: new Date(),
      updatedBy: 'updatedBy',
    })

    return getContext(ctx).getAll()
  }

  @Query(() => User)
  async getUser(@Arg('_id') _id: string): Promise<User | undefined> {
    const user = this.users.find((u) => u._id === _id)

    return user
  }

  @Mutation(() => User)
  async createUser(@Arg('input') input: UserCreate): Promise<User> {
    const user = {
      _id: `${this.users.length + 1}`,
      ...input,
    }

    this.users.push(user)

    return user
  }

  @Mutation(() => User)
  async updateUser(@Arg('_id') _id: string, @Arg('input') input: UserCreate): Promise<User> {
    const user = this.users.find((u) => u._id === _id)

    if (!user) {
      throw new Error('User not found')
    }

    const updatedUser = {
      ...user,
      ...input,
    }

    this.users = this.users.map((u) => (u._id === _id ? updatedUser : u))

    return updatedUser
  }
}
