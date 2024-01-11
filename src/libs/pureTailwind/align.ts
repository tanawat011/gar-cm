import type { TwAlignContent, TwAlignItems, TwAlignSelf, TwScreenStyle } from './types'

/** Because this file too long,
 * * You can use shortcut 'ctrl + k, ctrl + j' to fold the code
 * * And can use 'ctrl + k, ctrl + 0' to unfold the code
 */
// Note: Please understand the tailwind why we are using this way to define the className

export const TW_ALIGN_CONTENT_SCREEN: TwScreenStyle<TwAlignContent> = {
  default: {
    start: 'content-start',
    end: 'content-end',
    center: 'content-center',
    between: 'content-between',
    around: 'content-around',
    evenly: 'content-evenly',
  },
  xs: {
    start: 'xs:content-start',
    end: 'xs:content-end',
    center: 'xs:content-center',
    between: 'xs:content-between',
    around: 'xs:content-around',
    evenly: 'xs:content-evenly',
  },
  sm: {
    start: 'sm:content-start',
    end: 'sm:content-end',
    center: 'sm:content-center',
    between: 'sm:content-between',
    around: 'sm:content-around',
    evenly: 'sm:content-evenly',
  },
  md: {
    start: 'md:content-start',
    end: 'md:content-end',
    center: 'md:content-center',
    between: 'md:content-between',
    around: 'md:content-around',
    evenly: 'md:content-evenly',
  },
  lg: {
    start: 'lg:content-start',
    end: 'lg:content-end',
    center: 'lg:content-center',
    between: 'lg:content-between',
    around: 'lg:content-around',
    evenly: 'lg:content-evenly',
  },
  xl: {
    start: 'xl:content-start',
    end: 'xl:content-end',
    center: 'xl:content-center',
    between: 'xl:content-between',
    around: 'xl:content-around',
    evenly: 'xl:content-evenly',
  },
} as const

export const TW_ALIGN_ITEMS_SCREEN: TwScreenStyle<TwAlignItems> = {
  default: {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  },
  xs: {
    start: 'xs:items-start',
    end: 'xs:items-end',
    center: 'xs:items-center',
    stretch: 'xs:items-stretch',
    baseline: 'xs:items-baseline',
  },
  sm: {
    start: 'sm:items-start',
    end: 'sm:items-end',
    center: 'sm:items-center',
    stretch: 'sm:items-stretch',
    baseline: 'sm:items-baseline',
  },
  md: {
    start: 'md:items-start',
    end: 'md:items-end',
    center: 'md:items-center',
    stretch: 'md:items-stretch',
    baseline: 'md:items-baseline',
  },
  lg: {
    start: 'lg:items-start',
    end: 'lg:items-end',
    center: 'lg:items-center',
    stretch: 'lg:items-stretch',
    baseline: 'lg:items-baseline',
  },
  xl: {
    start: 'xl:items-start',
    end: 'xl:items-end',
    center: 'xl:items-center',
    stretch: 'xl:items-stretch',
    baseline: 'xl:items-baseline',
  },
} as const

export const TW_ALIGN_SELF_SCREEN: TwScreenStyle<TwAlignSelf> = {
  default: {
    start: 'self-start',
    end: 'self-end',
    center: 'self-center',
    stretch: 'self-stretch',
    baseline: 'self-baseline',
  },
  xs: {
    start: 'xs:self-start',
    end: 'xs:self-end',
    center: 'xs:self-center',
    stretch: 'xs:self-stretch',
    baseline: 'xs:self-baseline',
  },
  sm: {
    start: 'sm:self-start',
    end: 'sm:self-end',
    center: 'sm:self-center',
    stretch: 'sm:self-stretch',
    baseline: 'sm:self-baseline',
  },
  md: {
    start: 'md:self-start',
    end: 'md:self-end',
    center: 'md:self-center',
    stretch: 'md:self-stretch',
    baseline: 'md:self-baseline',
  },
  lg: {
    start: 'lg:self-start',
    end: 'lg:self-end',
    center: 'lg:self-center',
    stretch: 'lg:self-stretch',
    baseline: 'lg:self-baseline',
  },
  xl: {
    start: 'xl:self-start',
    end: 'xl:self-end',
    center: 'xl:self-center',
    stretch: 'xl:self-stretch',
    baseline: 'xl:self-baseline',
  },
} as const
