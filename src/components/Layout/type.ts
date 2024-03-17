import type { NumericRange } from '@/libs/utilityTypes'

// NOTE: This is all the classes that are available in TailwindCSS

// NOTE: Align Items
// items-start items-center items-end items-stretch items-baseline
// xs:items-start xs:items-center xs:items-end xs:items-stretch xs:items-baseline
// sm:items-start sm:items-center sm:items-end sm:items-stretch sm:items-baseline
// md:items-start md:items-center md:items-end md:items-stretch md:items-baseline
// lg:items-start lg:items-center lg:items-end lg:items-stretch lg:items-baseline
// xl:items-start xl:items-center xl:items-end xl:items-stretch xl:items-baseline

// NOTE: Justify Content
// justify-start justify-center justify-end justify-between justify-around justify-evenly
// xs:justify-start xs:justify-center xs:justify-end xs:justify-between xs:justify-around xs:justify-evenly
// sm:justify-start sm:justify-center sm:justify-end sm:justify-between sm:justify-around sm:justify-evenly
// md:justify-start md:justify-center md:justify-end md:justify-between md:justify-around md:justify-evenly
// lg:justify-start lg:justify-center lg:justify-end lg:justify-between lg:justify-around lg:justify-evenly
// xl:justify-start xl:justify-center xl:justify-end xl:justify-between xl:justify-around xl:justify-evenly

// NOTE: Width
// w-full w-auto w-fit w-screen w-1/2
// xs:w-full xs:w-auto xs:w-fit xs:w-screen xs:w-1/2
// sm:w-full sm:w-auto sm:w-fit sm:w-screen sm:w-1/2
// md:w-full md:w-auto md:w-fit md:w-screen md:w-1/2
// lg:w-full lg:w-auto lg:w-fit lg:w-screen lg:w-1/2
// xl:w-full xl:w-auto xl:w-fit xl:w-screen xl:w-1/2

// NOTE: Height
// h-full h-auto h-fit h-screen h-1/2
// xs:h-full xs:h-auto xs:h-fit xs:h-screen xs:h-1/2
// sm:h-full sm:h-auto sm:h-fit sm:h-screen sm:h-1/2
// md:h-full md:h-auto md:h-fit md:h-screen md:h-1/2
// lg:h-full lg:h-auto lg:h-fit lg:h-screen lg:h-1/2
// xl:h-full xl:h-auto xl:h-fit xl:h-screen xl:h-1/2

export type Screen = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type Width = 'full' | 'auto' | 'fit' | 'screen' | 'half'
export type Height = 'full' | 'auto' | 'fit' | 'screen' | 'half'

export type ScreenAlignItems = Record<Screen, AlignItems>
export type ScreenJustifyContent = Record<Screen, JustifyContent>
export type ScreenWidth = Record<Screen, Width>
export type ScreenHeight = Record<Screen, Height>

export type LayoutProps = {
  children: React.ReactNode
  className?: string
  gap?: NumericRange<1, 12>
  items?: AlignItems
  justify?: JustifyContent
  width?: Width
  height?: Height
  // items?: ScreenAlignItems | AlignItems
  // justify?: ScreenJustifyContent | JustifyContent
  // width?: ScreenWidth | Width
  // height?: ScreenHeight | Height
}
