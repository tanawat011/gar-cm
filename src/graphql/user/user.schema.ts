import { Field, ObjectType, InputType } from 'type-graphql'

@ObjectType()
export class DefaultField {
  @Field()
  active!: boolean
  @Field()
  createdAt!: Date
  @Field()
  createdBy!: string
  @Field()
  updatedAt!: Date
  @Field()
  updatedBy!: string
  @Field()
  deletedAt?: Date
  @Field()
  deletedBy?: string
}

@ObjectType()
export class User extends DefaultField {
  @Field()
  _id!: string
  @Field()
  username!: string
  @Field()
  password!: string
  @Field()
  email!: string
  @Field()
  firstName?: string
  @Field()
  lastName?: string
  @Field()
  age?: number
}

@InputType()
export class UserCreate implements Partial<Omit<User, '_id' | keyof DefaultField>> {
  @Field()
  username!: string
  @Field()
  password!: string
  @Field()
  email!: string
  @Field()
  firstName?: string
  @Field()
  lastName?: string
  @Field()
  age?: number
}

@InputType()
export class UserUpdate implements Partial<Omit<User, keyof DefaultField>> {
  @Field()
  _id!: string
  @Field()
  username?: string
  @Field()
  password?: string
  @Field()
  email?: string
  @Field()
  firstName?: string
  @Field()
  lastName?: string
  @Field()
  age?: number
}
