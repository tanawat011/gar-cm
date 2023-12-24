import React from 'react'

import tw, { styled } from 'twin.macro'

import { Menu } from '@/components/Common'
import { menu } from '@/configs'

import { Footer } from './Footer'
import { Logo } from './Logo'

export const Content = () => {
  return (
    <StyledContent>
      <Logo />

      <Menu items={menu} />

      <Footer />
    </StyledContent>
  )
}

const StyledContent = styled.div(() => {
  return [tw`flex flex-col h-full transition-width`]
})
