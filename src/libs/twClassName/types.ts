import type {
  TW_ALIGN_CONTENT,
  TW_ALIGN_ITEMS,
  TW_ALIGN_SELF,
  TW_BORDER_STYLE,
  TW_BULLET_POSITION,
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

export type TwTheme = (typeof TW_THEME)[keyof typeof TW_THEME]

export type TwColorSemantic = (typeof TW_COLOR_SEMANTIC)[keyof typeof TW_COLOR_SEMANTIC]
export type TwColor = (typeof TW_COLOR)[keyof typeof TW_COLOR]
export type TwColorLevel = (typeof TW_COLOR_LEVEL)[keyof typeof TW_COLOR_LEVEL]

export type TwPseudo = (typeof TW_PSEUDO)[keyof typeof TW_PSEUDO]

export type TwSizeStandard = (typeof TW_SIZE_STANDARD)[keyof typeof TW_SIZE_STANDARD]
export type TwSize = (typeof TW_SIZE)[keyof typeof TW_SIZE]
export type TwSizeOver = (typeof TW_SIZE_OVER)[keyof typeof TW_SIZE_OVER]

export type TwTextSize = (typeof TW_TEXT_SIZE)[keyof typeof TW_TEXT_SIZE]
export type TwTextAlign = (typeof TW_TEXT_ALIGN)[keyof typeof TW_TEXT_ALIGN]
export type TwTextDecoration = (typeof TW_TEXT_DECORATION)[keyof typeof TW_TEXT_DECORATION]
export type TwTextTransform = (typeof TW_TEXT_TRANSFORM)[keyof typeof TW_TEXT_TRANSFORM]
export type TwTextWeight = (typeof TW_TEXT_WEIGHT)[keyof typeof TW_TEXT_WEIGHT]

export type TwDirection = (typeof TW_DIRECTION)[keyof typeof TW_DIRECTION]
export type TwVerticalAlign = (typeof TW_VERTICAL_ALIGN)[keyof typeof TW_VERTICAL_ALIGN]

export type TwAlignSelf = (typeof TW_ALIGN_SELF)[keyof typeof TW_ALIGN_SELF]
export type TwAlignItems = (typeof TW_ALIGN_ITEMS)[keyof typeof TW_ALIGN_ITEMS]
export type TwAlignContent = (typeof TW_ALIGN_CONTENT)[keyof typeof TW_ALIGN_CONTENT]

export type TwJustifySelf = (typeof TW_JUSTIFY_SELF)[keyof typeof TW_JUSTIFY_SELF]
export type TwJustifyItems = (typeof TW_JUSTIFY_ITEMS)[keyof typeof TW_JUSTIFY_ITEMS]
export type TwJustifyContent = (typeof TW_JUSTIFY_CONTENT)[keyof typeof TW_JUSTIFY_CONTENT]

export type TwBulletType = (typeof TW_BULLET_TYPE)[keyof typeof TW_BULLET_TYPE]
export type TwBulletPosition = (typeof TW_BULLET_POSITION)[keyof typeof TW_BULLET_POSITION]

export type TwPositionHorizontal = (typeof TW_POSITION_HORIZONTAL)[keyof typeof TW_POSITION_HORIZONTAL]
export type TwPositionVertical = (typeof TW_POSITION_VERTICAL)[keyof typeof TW_POSITION_VERTICAL]
export type TwPosition = (typeof TW_POSITION)[keyof typeof TW_POSITION]

export type TwShape = (typeof TW_SHAPE)[keyof typeof TW_SHAPE]

export type TwBorderStyle = (typeof TW_BORDER_STYLE)[keyof typeof TW_BORDER_STYLE]

export type TwVariant = (typeof TW_VARIANT)[keyof typeof TW_VARIANT]

export type TwWidth = (typeof TW_WIDTH)[keyof typeof TW_WIDTH]
export type TwHeight = (typeof TW_HEIGHT)[keyof typeof TW_HEIGHT]

export type TwWordBreak = (typeof TW_WORD_BREAK)[keyof typeof TW_WORD_BREAK]
