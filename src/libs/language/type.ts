import type { LANG } from './constant'

export type Lang = (typeof LANG)[keyof typeof LANG]
