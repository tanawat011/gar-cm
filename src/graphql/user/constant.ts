export const COLLECTION_NAME = 'users'
export const PREFIX = COLLECTION_NAME.slice(0, -1)
export const POSTFIX = PREFIX.slice(0, 1).toUpperCase() + PREFIX.slice(1)

export const RESOLVER = {
  GET_ALL: `${COLLECTION_NAME}`,
  GET_BY_ID: `${PREFIX}`,
  CREATE: `create${POSTFIX}`,
  UPDATE: `update${POSTFIX}`,
  DELETE: `delete${POSTFIX}`,
  DELETE_PERMANENTLY: `deletePermanently${POSTFIX}`,
}
