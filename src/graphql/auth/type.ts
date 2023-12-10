import type { DefaultType } from '../allDefault'
import type { UserDocument } from '../user'

export type Document = {
  token: string
} & UserDocument &
  DefaultType

export type InputDocument = { input: Document }
