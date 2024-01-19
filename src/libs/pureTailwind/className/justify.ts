import type { TwJustifyContent, TwJustifyItems, TwJustifySelf, TwScreenStyle } from '../types'

/** Because this file too long,
 * * You can use shortcut 'ctrl + k, ctrl + j' to fold the code
 * * And can use 'ctrl + k, ctrl + 0' to unfold the code
 */
// Note: Please understand the tailwind why we are using this way to define the className

export const TW_JUSTIFY_CONTENT_SCREEN: TwScreenStyle<TwJustifyContent> = {
  default: {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  },
  xs: {
    start: 'xs:justify-start',
    end: 'xs:justify-end',
    center: 'xs:justify-center',
    between: 'xs:justify-between',
    around: 'xs:justify-around',
    evenly: 'xs:justify-evenly',
  },
  sm: {
    start: 'sm:justify-start',
    end: 'sm:justify-end',
    center: 'sm:justify-center',
    between: 'sm:justify-between',
    around: 'sm:justify-around',
    evenly: 'sm:justify-evenly',
  },
  md: {
    start: 'md:justify-start',
    end: 'md:justify-end',
    center: 'md:justify-center',
    between: 'md:justify-between',
    around: 'md:justify-around',
    evenly: 'md:justify-evenly',
  },
  lg: {
    start: 'lg:justify-start',
    end: 'lg:justify-end',
    center: 'lg:justify-center',
    between: 'lg:justify-between',
    around: 'lg:justify-around',
    evenly: 'lg:justify-evenly',
  },
  xl: {
    start: 'xl:justify-start',
    end: 'xl:justify-end',
    center: 'xl:justify-center',
    between: 'xl:justify-between',
    around: 'xl:justify-around',
    evenly: 'xl:justify-evenly',
  },
} as const

export const TW_JUSTIFY_ITEMS_SCREEN: TwScreenStyle<TwJustifyItems> = {
  default: {
    start: 'justify-items-start',
    end: 'justify-items-end',
    center: 'justify-items-center',
    stretch: 'justify-items-stretch',
  },
  xs: {
    start: 'xs:justify-items-start',
    end: 'xs:justify-items-end',
    center: 'xs:justify-items-center',
    stretch: 'xs:justify-items-stretch',
  },
  sm: {
    start: 'sm:justify-items-start',
    end: 'sm:justify-items-end',
    center: 'sm:justify-items-center',
    stretch: 'sm:justify-items-stretch',
  },
  md: {
    start: 'md:justify-items-start',
    end: 'md:justify-items-end',
    center: 'md:justify-items-center',
    stretch: 'md:justify-items-stretch',
  },
  lg: {
    start: 'lg:justify-items-start',
    end: 'lg:justify-items-end',
    center: 'lg:justify-items-center',
    stretch: 'lg:justify-items-stretch',
  },
  xl: {
    start: 'xl:justify-items-start',
    end: 'xl:justify-items-end',
    center: 'xl:justify-items-center',
    stretch: 'xl:justify-items-stretch',
  },
} as const

export const TW_JUSTIFY_SELF_SCREEN: TwScreenStyle<TwJustifySelf> = {
  default: {
    start: 'justify-self-start',
    end: 'justify-self-end',
    center: 'justify-self-center',
    stretch: 'justify-self-stretch',
  },
  xs: {
    start: 'xs:justify-self-start',
    end: 'xs:justify-self-end',
    center: 'xs:justify-self-center',
    stretch: 'xs:justify-self-stretch',
  },
  sm: {
    start: 'sm:justify-self-start',
    end: 'sm:justify-self-end',
    center: 'sm:justify-self-center',
    stretch: 'sm:justify-self-stretch',
  },
  md: {
    start: 'md:justify-self-start',
    end: 'md:justify-self-end',
    center: 'md:justify-self-center',
    stretch: 'md:justify-self-stretch',
  },
  lg: {
    start: 'lg:justify-self-start',
    end: 'lg:justify-self-end',
    center: 'lg:justify-self-center',
    stretch: 'lg:justify-self-stretch',
  },
  xl: {
    start: 'xl:justify-self-start',
    end: 'xl:justify-self-end',
    center: 'xl:justify-self-center',
    stretch: 'xl:justify-self-stretch',
  },
} as const
