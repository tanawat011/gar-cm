import type {
  TwAlignContent,
  TwAlignItems,
  TwAlignSelf,
  TwBorderStyle,
  TwBulletPlacement,
  TwBulletType,
  TwColor,
  TwColorLevel,
  TwColorSemantic,
  TwDirection,
  TwHeight,
  TwJustifyContent,
  TwJustifyItems,
  TwJustifySelf,
  TwPosition,
  TwPositionHorizontal,
  TwPositionVertical,
  TwPseudo,
  TwShape,
  TwSize,
  TwSizeOver,
  TwSizeStandard,
  TwTextAlign,
  TwTextDecoration,
  TwTextSize,
  TwTextTransform,
  TwTextWeight,
  TwTheme,
  TwVariant,
  TwVerticalAlign,
  TwWidth,
  TwWordBreak,
} from './types'

import {
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
import { toSelection } from './utils'

export const twThemeSelection = toSelection<TwTheme>(TW_THEME)
export const twColorSemanticSelection = toSelection<TwColorSemantic>(TW_COLOR_SEMANTIC)
export const twColorSelection = toSelection<TwColor>(TW_COLOR)
export const twColorLevelSelection = toSelection<TwColorLevel>(TW_COLOR_LEVEL)
export const twPseudoSelection = toSelection<TwPseudo>(TW_PSEUDO)
export const twSizeStandardSelection = toSelection<TwSizeStandard>(TW_SIZE_STANDARD)
export const twSizeSelection = toSelection<TwSize>(TW_SIZE)
export const twSizeOverSelection = toSelection<TwSizeOver>(TW_SIZE_OVER)
export const twTextSizeSelection = toSelection<TwTextSize>(TW_TEXT_SIZE)
export const twTextAlignSelection = toSelection<TwTextAlign>(TW_TEXT_ALIGN)
export const twTextDecorationSelection = toSelection<TwTextDecoration>(TW_TEXT_DECORATION)
export const twTextTransformSelection = toSelection<TwTextTransform>(TW_TEXT_TRANSFORM)
export const twTextWeightSelection = toSelection<TwTextWeight>(TW_TEXT_WEIGHT)
export const twDirectionSelection = toSelection<TwDirection>(TW_DIRECTION)
export const twVerticalAlignSelection = toSelection<TwVerticalAlign>(TW_VERTICAL_ALIGN)
export const twAlignSelfSelection = toSelection<TwAlignSelf>(TW_ALIGN_SELF)
export const twAlignItemsSelection = toSelection<TwAlignItems>(TW_ALIGN_ITEMS)
export const twAlignContentSelection = toSelection<TwAlignContent>(TW_ALIGN_CONTENT)
export const twJustifySelfSelection = toSelection<TwJustifySelf>(TW_JUSTIFY_SELF)
export const twJustifyItemsSelection = toSelection<TwJustifyItems>(TW_JUSTIFY_ITEMS)
export const twJustifyContentSelection = toSelection<TwJustifyContent>(TW_JUSTIFY_CONTENT)
export const twBulletTypeSelection = toSelection<TwBulletType>(TW_BULLET_TYPE)
export const twBulletPlacementSelection = toSelection<TwBulletPlacement>(TW_BULLET_PLACEMENT)
export const twPositionHorizontalSelection = toSelection<TwPositionHorizontal>(TW_POSITION_HORIZONTAL)
export const twPositionVerticalSelection = toSelection<TwPositionVertical>(TW_POSITION_VERTICAL)
export const twPositionSelection = toSelection<TwPosition>(TW_POSITION)
export const twShapeSelection = toSelection<TwShape>(TW_SHAPE)
export const twBorderStyleSelection = toSelection<TwBorderStyle>(TW_BORDER_STYLE)
export const twVariantSelection = toSelection<TwVariant>(TW_VARIANT)
export const twWidthSelection = toSelection<TwWidth>(TW_WIDTH)
export const twHeightSelection = toSelection<TwHeight>(TW_HEIGHT)
export const twWordBreakSelection = toSelection<TwWordBreak>(TW_WORD_BREAK)
