export type DefaultType = {
  active: boolean
  createdAt: Date
  createdBy: string
  updatedAt: Date
  updatedBy: string
  deletedAt?: Date
  deletedBy?: string
}

export const defaultModel = {
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
    default: 'admin',
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  updatedBy: {
    type: String,
    default: 'admin',
  },
  deletedAt: Date,
  deletedBy: String,
}
