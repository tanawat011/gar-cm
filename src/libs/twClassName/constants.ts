export const TW_THEME = ['light', 'dark'] as const

export const TW_COLOR_SEMANTIC = [
  'primary',
  'secondary',
  'tertiary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
  'default',
  'content',
] as const

export const TW_COLOR = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const

export const TW_COLOR_LEVEL = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const

export const TW_PSEUDO = ['before', 'after', 'active'] as const

export const TW_SIZE_STANDARD = ['sm', 'md', 'lg'] as const
export const TW_SIZE = ['xs', ...TW_SIZE_STANDARD, 'xl'] as const
export const TW_SIZE_OVER = ['2xs', ...TW_SIZE, '2xl', '3xl'] as const

export const TW_TEXT_SIZE = [
  '2xs',
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
] as const
export const TW_TEXT_ALIGN = ['left', 'center', 'right', 'justify'] as const
export const TW_TEXT_DECORATION = ['underline', 'overline', 'line-through', 'no-underline'] as const
export const TW_TEXT_TRANSFORM = ['uppercase', 'lowercase', 'capitalize', 'normal-case'] as const
export const TW_TEXT_WEIGHT = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
  'inherit',
] as const

export const TW_DIRECTION = ['vertical', 'horizontal'] as const
export const TW_VERTICAL_ALIGN = [
  'baseline',
  'top',
  'middle',
  'bottom',
  'text-top',
  'text-bottom',
  'unset',
  'super',
  'sub',
] as const

export const TW_ALIGN_SELF = ['auto', 'start', 'center', 'end', 'stretch'] as const
export const TW_ALIGN_ITEMS = ['start', 'center', 'end', 'baseline', 'stretch'] as const
export const TW_ALIGN_CONTENT = ['start', 'center', 'end', 'between', 'around', 'stretch'] as const

export const TW_JUSTIFY_SELF = ['auto', 'start', 'center', 'end', 'stretch'] as const
export const TW_JUSTIFY_ITEMS = ['start', 'center', 'end', 'between', 'around'] as const
export const TW_JUSTIFY_CONTENT = ['start', 'center', 'end', 'between', 'around', 'stretch'] as const

export const TW_BULLET_TYPE = [
  'circle',
  'disc',
  'square',
  'decimal',
  'decimal-leading-zero',
  'lower-alpha',
  'upper-alpha',
  'lower-roman',
  'upper-roman',
  'none',
] as const
export const TW_BULLET_POSITION = ['inside', 'outside'] as const

export const TW_POSITION_HORIZONTAL = ['left', 'right'] as const
export const TW_POSITION_VERTICAL = ['top', 'bottom'] as const
export const TW_POSITION = [...TW_POSITION_HORIZONTAL, ...TW_POSITION_VERTICAL] as const

export const TW_SHAPE = ['none', 'circle', 'square', 'rounded'] as const

export const TW_BORDER_STYLE = ['solid', 'dashed', 'dotted', 'double', 'none'] as const

export const TW_VARIANT = ['solid', 'bordered', 'ghost', 'light', 'flat', 'faded', 'shadow'] as const

export const TW_WIDTH = ['full', 'fit', 'wide', 'auto'] as const
export const TW_HEIGHT = ['full', 'fit', 'auto'] as const

export const TW_WORD_BREAK = ['normal', 'break-all', 'break-word', 'keep-all'] as const
