// NOTE: Tailwind theme
export enum TW_THEME {
  LIGHT = 'light',
  DARK = 'dark',
}
export const TW_THEME_ARR = Object.values(TW_THEME)

// NOTE: Tailwind semantic colors
export enum TW_COLOR_SEMANTIC {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  ACCENT = 'accent',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  DEFAULT = 'default',
  CONTENT = 'content',
}
export const TW_COLOR_SEMANTIC_ARR = Object.values(TW_COLOR_SEMANTIC)

// NOTE: Tailwind colors
export enum TW_COLOR {
  SLATE = 'slate',
  GRAY = 'gray',
  ZINC = 'zinc',
  NEUTRAL = 'neutral',
  STONE = 'stone',
  RED = 'red',
  ORANGE = 'orange',
  AMBER = 'amber',
  YELLOW = 'yellow',
  LIME = 'lime',
  GREEN = 'green',
  EMERALD = 'emerald',
  TEAL = 'teal',
  CYAN = 'cyan',
  SKY = 'sky',
  BLUE = 'blue',
  INDIGO = 'indigo',
  VIOLET = 'violet',
  PURPLE = 'purple',
  FUCHSIA = 'fuchsia',
  PINK = 'pink',
  ROSE = 'rose',
}
export const TW_COLOR_ARR = Object.values(TW_COLOR)

// NOTE: Tailwind color levels
export enum TW_COLOR_LEVEL {
  L50 = '50',
  L100 = '100',
  L200 = '200',
  L300 = '300',
  L400 = '400',
  L500 = '500',
  L600 = '600',
  L700 = '700',
  L800 = '800',
  L900 = '900',
}
export const TW_COLOR_LEVEL_ARR = Object.values(TW_COLOR_LEVEL)

// NOTE: Tailwind pseudo classes
export enum TW_PSEUDO {
  BEFORE = 'before',
  AFTER = 'after',
  ACTIVE = 'active',
}
export const TW_PSEUDO_ARR = Object.values(TW_PSEUDO)

// NOTE: Tailwind standard sizes
export enum TW_SIZE_STANDARD {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}
export const TW_SIZE_STANDARD_ARR = Object.values(TW_SIZE_STANDARD)

// NOTE: Tailwind sizes
export enum TW_SIZE {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}
export const TW_SIZE_ARR = Object.values(TW_SIZE)

// NOTE: Tailwind with over sizes
export enum TW_SIZE_OVER {
  '2XS' = '2xs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
}
export const TW_SIZE_OVER_ARR = Object.values(TW_SIZE_OVER)

// NOTE: Tailwind text sizes
export enum TW_TEXT_SIZE {
  '2XS' = '2xs',
  XS = 'xs',
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
  '4XL' = '4xl',
  '5XL' = '5xl',
  '6XL' = '6xl',
  '7XL' = '7xl',
  '8XL' = '8xl',
  '9XL' = '9xl',
}
export const TW_TEXT_SIZE_ARR = Object.values(TW_TEXT_SIZE)

// NOTE: Tailwind text align
export enum TW_TEXT_ALIGN {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}
export const TW_TEXT_ALIGN_ARR = Object.values(TW_TEXT_ALIGN)

// NOTE: Tailwind text decoration
export enum TW_TEXT_DECORATION {
  UNDERLINE = 'underline',
  OVERLINE = 'overline',
  LINE_THROUGH = 'line-through',
  NO_UNDERLINE = 'no-underline',
}
export const TW_TEXT_DECORATION_ARR = Object.values(TW_TEXT_DECORATION)

// NOTE: Tailwind text transform
export enum TW_TEXT_TRANSFORM {
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
  CAPITALIZE = 'capitalize',
  NORMAL_CASE = 'normal-case',
}
export const TW_TEXT_TRANSFORM_ARR = Object.values(TW_TEXT_TRANSFORM)

// NOTE: Tailwind text weight
export enum TW_TEXT_WEIGHT {
  THIN = 'thin',
  EXTRALIGHT = 'extralight',
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMIBOLD = 'semibold',
  BOLD = 'bold',
  EXTRABOLD = 'extrabold',
  BLACK = 'black',
}
export const TW_TEXT_WEIGHT_ARR = Object.values(TW_TEXT_WEIGHT)

// NOTE: Tailwind direction
export enum TW_DIRECTION {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}
export const TW_DIRECTION_ARR = Object.values(TW_DIRECTION)

// NOTE: Tailwind vertical align
export enum TW_VERTICAL_ALIGN {
  BASELINE = 'baseline',
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
  TEXT_TOP = 'text-top',
  TEXT_BOTTOM = 'text-bottom',
  UNSET = 'unset',
  SUPER = 'super',
  SUB = 'sub',
}
export const TW_VERTICAL_ALIGN_ARR = Object.values(TW_VERTICAL_ALIGN)

// NOTE: Tailwind align self
export enum TW_ALIGN_SELF {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  STRETCH = 'stretch',
  BASELINE = 'baseline',
}
export const TW_ALIGN_SELF_ARR = Object.values(TW_ALIGN_SELF)

// NOTE: Tailwind align items
export enum TW_ALIGN_ITEMS {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  BASELINE = 'baseline',
  STRETCH = 'stretch',
}
export const TW_ALIGN_ITEMS_ARR = Object.values(TW_ALIGN_ITEMS)

// NOTE: Tailwind align content
export enum TW_ALIGN_CONTENT {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  BETWEEN = 'between',
  AROUND = 'around',
  EVENLY = 'evenly',
}
export const TW_ALIGN_CONTENT_ARR = Object.values(TW_ALIGN_CONTENT)

// NOTE: Tailwind justify self
export enum TW_JUSTIFY_SELF {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  STRETCH = 'stretch',
}
export const TW_JUSTIFY_SELF_ARR = Object.values(TW_JUSTIFY_SELF)

// NOTE: Tailwind justify items
export enum TW_JUSTIFY_ITEMS {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  STRETCH = 'stretch',
}
export const TW_JUSTIFY_ITEMS_ARR = Object.values(TW_JUSTIFY_ITEMS)

// NOTE: Tailwind justify content
export enum TW_JUSTIFY_CONTENT {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  BETWEEN = 'between',
  AROUND = 'around',
  EVENLY = 'evenly',
}
export const TW_JUSTIFY_CONTENT_ARR = Object.values(TW_JUSTIFY_CONTENT)

// NOTE: Tailwind bullet type
export enum TW_BULLET_TYPE {
  CIRCLE = 'circle',
  DISC = 'disc',
  SQUARE = 'square',
  DECIMAL = 'decimal',
  DECIMAL_LEADING_ZERO = 'decimal-leading-zero',
  LOWER_ALPHA = 'lower-alpha',
  UPPER_ALPHA = 'upper-alpha',
  LOWER_ROMAN = 'lower-roman',
  UPPER_ROMAN = 'upper-roman',
  NONE = 'none',
}
export const TW_BULLET_TYPE_ARR = Object.values(TW_BULLET_TYPE)

// NOTE: Tailwind bullet placement
export enum TW_BULLET_PLACEMENT {
  INSIDE = 'inside',
  OUTSIDE = 'outside',
}
export const TW_BULLET_PLACEMENT_ARR = Object.values(TW_BULLET_PLACEMENT)

// NOTE: Tailwind horizontal position
export enum TW_POSITION_HORIZONTAL {
  LEFT = 'left',
  RIGHT = 'right',
}
export const TW_POSITION_HORIZONTAL_ARR = Object.values(TW_POSITION_HORIZONTAL)

// NOTE: Tailwind vertical position
export enum TW_POSITION_VERTICAL {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export const TW_POSITION_VERTICAL_ARR = Object.values(TW_POSITION_VERTICAL)

// NOTE: Tailwind position
export enum TW_POSITION {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

// NOTE: Tailwind shape
export enum TW_SHAPE {
  NONE = 'none',
  CIRCLE = 'circle',
  SQUARE = 'square',
  ROUNDED = 'rounded',
}
export const TW_SHAPE_ARR = Object.values(TW_SHAPE)

// NOTE: Tailwind border style
export enum TW_BORDER_STYLE {
  SOLID = 'solid',
  DASHED = 'dashed',
  DOTTED = 'dotted',
  DOUBLE = 'double',
  NONE = 'none',
}
export const TW_BORDER_STYLE_ARR = Object.values(TW_BORDER_STYLE)

// NOTE: Tailwind variant
export enum TW_VARIANT {
  SOLID = 'solid',
  BORDERED = 'bordered',
  GHOST = 'ghost',
  LIGHT = 'light',
  FLAT = 'flat',
  FADED = 'faded',
  SHADOW = 'shadow',
}
export const TW_VARIANT_ARR = Object.values(TW_VARIANT)

// NOTE: Tailwind width
export enum TW_WIDTH {
  FULL = 'full',
  FIT = 'fit',
  WIDE = 'wide',
  AUTO = 'auto',
}
export const TW_WIDTH_ARR = Object.values(TW_WIDTH)

// NOTE: Tailwind height
export enum TW_HEIGHT {
  FULL = 'full',
  FIT = 'fit',
  AUTO = 'auto',
}
export const TW_HEIGHT_ARR = Object.values(TW_HEIGHT)

// NOTE: Tailwind word break
export enum TW_WORD_BREAK {
  NORMAL = 'normal',
  BREAK_ALL = 'break-all',
  BREAK_WORD = 'break-word',
  KEEP_ALL = 'keep-all',
}
export const TW_WORD_BREAK_ARR = Object.values(TW_WORD_BREAK)
