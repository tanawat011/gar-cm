import type { LayoutProps } from './type'

export const transformTwScreenClass = (tw: string | Record<string, string>, prefix = '') => {
  if (typeof tw === 'string') return `${prefix}${tw}`

  return Object.entries(tw)
    .map(([key, value]) => `${key}:${prefix}${value}`)
    .join(' ')
}

export const transformJustify = (j: LayoutProps['justify']) => {
  const needPrefix = ['between', 'around', 'evenly'] as LayoutProps['justify'][]

  if (needPrefix.includes(j)) return `space-${j}`

  return j
}

export const transformWidth = (w: LayoutProps['width']) => {
  switch (w) {
    case 'fit':
      return 'fit-content'
    case 'screen':
      return '100vw'
    case 'half':
      return '50%'
    case 'full':
      return '100%'
    case 'auto':
    default:
      return 'auto'
  }
}

export const transformHeight = (h: LayoutProps['height']) => {
  switch (h) {
    case 'fit':
      return 'fit-content'
    case 'screen':
      return '100vh'
    case 'half':
      return '50%'
    case 'full':
      return '100%'
    case 'auto':
    default:
      return 'auto'
  }
}
