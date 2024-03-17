import type {
  TW_ALIGN_CONTENT,
  TW_ALIGN_ITEMS,
  TW_ALIGN_SELF,
  TW_BORDER_STYLE,
  TW_BULLET_PLACEMENT,
  TW_BULLET_TYPE,
  TW_COLOR,
  TW_COLOR_LEVEL,
  TW_COLOR_SEMANTIC,
  TW_DIRECTION,
  TW_HEIGHT,
  TW_JUSTIFY_CONTENT,
  TW_JUSTIFY_ITEMS,
  TW_JUSTIFY_SELF,
  TW_POSITION,
  TW_POSITION_HORIZONTAL,
  TW_POSITION_VERTICAL,
  TW_PSEUDO,
  TW_SHAPE,
  TW_SIZE,
  TW_SIZE_OVER,
  TW_SIZE_STANDARD,
  TW_TEXT_ALIGN,
  TW_TEXT_DECORATION,
  TW_TEXT_SIZE,
  TW_TEXT_TRANSFORM,
  TW_TEXT_WEIGHT,
  TW_THEME,
  TW_VARIANT,
  TW_VERTICAL_ALIGN,
  TW_WIDTH,
  TW_WORD_BREAK,
} from './constants'
import type { NumericRange } from './utilsType'

export type TwScreenSizeOption<T> = {
  [key in TwSize]?: T
}

export type TwScreenSizeOptionWithDefault<T> = TwScreenSizeOption<T> & {
  default?: T
}

export type TwScreenStyle<T extends string | number> = Required<TwScreenSizeOptionWithDefault<{ [key in T]: string }>>

export type TwUnionProp<T> = T | TwScreenSizeOptionWithDefault<T>

export type TwGridColAmount = NumericRange<1, 12> | 'auto'
export type TwGridRowAmount = NumericRange<1, 6> | 'auto'
export type TwGapAmount = NumericRange<0, 12> | 0
export type TwGridColSpanAmount = NumericRange<1, 12> | 'auto'
export type TwGridColStartAmount = NumericRange<1, 13>
export type TwGridRowSpanAmount = NumericRange<1, 6>
export type TwGridRowStartAmount = NumericRange<1, 7>

export type TwTheme = `${TW_THEME}`

export type TwColorSemantic = `${TW_COLOR_SEMANTIC}`
export type TwColor = `${TW_COLOR}`
export type TwColorLevel = `${TW_COLOR_LEVEL}`

export type TwPseudo = `${TW_PSEUDO}`

export type TwSizeStandard = `${TW_SIZE_STANDARD}`
export type TwSize = `${TW_SIZE}`
export type TwSizeOver = `${TW_SIZE_OVER}`

export type TwTextSize = `${TW_TEXT_SIZE}`
export type TwTextAlign = `${TW_TEXT_ALIGN}`
export type TwTextDecoration = `${TW_TEXT_DECORATION}`
export type TwTextTransform = `${TW_TEXT_TRANSFORM}`
export type TwTextWeight = `${TW_TEXT_WEIGHT}`

export type TwDirection = `${TW_DIRECTION}`
export type TwVerticalAlign = `${TW_VERTICAL_ALIGN}`

export type TwAlignSelf = `${TW_ALIGN_SELF}`
export type TwAlignItems = `${TW_ALIGN_ITEMS}`
export type TwAlignContent = `${TW_ALIGN_CONTENT}`

export type TwJustifySelf = `${TW_JUSTIFY_SELF}`
export type TwJustifyItems = `${TW_JUSTIFY_ITEMS}`
export type TwJustifyContent = `${TW_JUSTIFY_CONTENT}`

export type TwBulletType = `${TW_BULLET_TYPE}`
export type TwBulletPlacement = `${TW_BULLET_PLACEMENT}`

export type TwPositionHorizontal = `${TW_POSITION_HORIZONTAL}`
export type TwPositionVertical = `${TW_POSITION_VERTICAL}`
export type TwPosition = `${TW_POSITION}`

export type TwShape = `${TW_SHAPE}`

export type TwBorderStyle = `${TW_BORDER_STYLE}`

export type TwVariant = `${TW_VARIANT}`

export type TwWidth = `${TW_WIDTH}`
export type TwHeight = `${TW_HEIGHT}`

export type TwWordBreak = `${TW_WORD_BREAK}`
