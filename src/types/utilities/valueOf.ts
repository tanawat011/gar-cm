/**
 * @file types/utilities/valueOf.ts
 * @description Generate union type from values of any object
 * @example
 *  const example = {
 *    a: '1'
 *    b: '2'
 *    c: true
 *    1: '4'
 *    2: 5
 *  }
 *  const data1: ValueOfObject<typeof example> = ... // 'a' | 'b' | 'c' | 1 | 2
 */
export type ValueOfObject<T, K extends keyof T> = T[K]
