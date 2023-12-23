import React from 'react'

import tw, { styled } from 'twin.macro'

import { Footer } from './Footer'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Content = () => {
  return (
    <StyledContent>
      <Logo />

      <Menu />

      <Footer />
    </StyledContent>
  )
}

const StyledContent = styled.div(() => {
  return [tw`flex flex-col h-full transition-width`]
})
