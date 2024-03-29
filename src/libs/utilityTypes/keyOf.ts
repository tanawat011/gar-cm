/**
 * @file types/utilities/keyOf.ts
 * @description Generate union type from key of object
 * @example
 *  type Data = {
 *    a: string
 *    b: string
 *    c: string
 *  }
 *  const data: KeyOf<Data> = '...' // 'a' | 'b' | 'c'
 */
export type KeyOf<T> = keyof Record<keyof T, string>

/**
 * @file types/utilities/keyOf.ts
 * @description Generate object type with key in other object and can be assigned to any value
 * @example
 *  type Data = {
 *    a: string
 *    b: string
 *    c: string
 *  }
 *  const data1: ObjectKeyOf<Data> = { a: 1, b: 2, c: 3 } // { a: unknown; b: unknown; c: unknown }
 *  const data2: ObjectKeyOf<Data, boolean> = { a: true, b: false, c: true } // { a: boolean; b: boolean; c: boolean }
 */
export type ObjectKeyOf<T, K = unknown> = { [key in KeyOf<T>]: K }

/**
 * @file types/utilities/keyOf.ts
 * @description Generate union type from keys of any object
 * @example
 *  const example = {
 *    a: 'example'
 *    b: 'example'
 *    c: 'example'
 *    1: 'example'
 *    2: 'example'
 *  }
 *  const data1: KeyOfObject<typeof example> = ... // 'a' | 'b' | 'c' | 1 | 2
 */
export type KeyOfObject<T> = keyof Record<keyof T, string>
