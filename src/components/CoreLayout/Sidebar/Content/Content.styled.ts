import type { SidebarStyle } from '@/types'

import { ScrollShadow } from '@nextui-org/react'
import tw, { styled } from 'twin.macro'

export const StyledMenuContainer = styled(ScrollShadow)<{ $sidebarStyle: SidebarStyle }>(({ $sidebarStyle }) => {
  const isModern = $sidebarStyle === 'modern'
  const menuHeignt = tw`h-[calc(100vh-(var(--navbar-h)*2)-(theme(spacing.4)*2))]`
  const menuHeigntModern = tw`h-[calc(100vh-(var(--navbar-h)*2)-(theme(spacing.4)*2)-(theme(spacing.3)*2))]`

  return [isModern ? menuHeigntModern : menuHeignt, tw`text-sm select-none`]
})
