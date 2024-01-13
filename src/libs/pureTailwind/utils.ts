import type { TwScreenStyle } from './types'
import type { MappingIcon } from './utilsType'

export const generateTwClassName = <T extends string | number>(
  classList: TwScreenStyle<T | string | number>,
  value?: unknown,
) => {
  const isNumber = typeof value === 'number'
  const isString = typeof value === 'string'

  if (!isNumber && !value) {
    if (classList?.default?.auto) return classList.default.auto

    return classList.default[1]
  }

  if (isNumber || isString) return classList.default[value]

  const cls = Object.entries(value).map(([key, val]) => {
    const _key = key as keyof typeof classList

    return classList[_key][val as never]
  })

  return cls.join(' ')
}

export const kebabToCapital = (str: string) => {
  return str.replace(/^-*(.)|-+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()))
}

export const toSelection =
  <T extends string>(enumItem: Record<string, string>) =>
  <U = string>(mappingIcon?: MappingIcon<T, U>) => {
    return Object.entries(enumItem).map(([key, value]) => {
      return {
        key: value as T,
        label: kebabToCapital(enumItem[key]),
        icon: mappingIcon?.[value as T],
      }
    })
  }
