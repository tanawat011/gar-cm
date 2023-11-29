import React from 'react'

import tw, { styled } from 'twin.macro'

type MiniSidebarContainerProps = {
  children?: React.ReactNode
}

export const MiniSidebarContainer: React.FC<MiniSidebarContainerProps> = ({ children }) => {
  return (
    <StyledContainer>
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div(() => {
  return [tw`h-full w-16 transition-width`]
})

const StyledChildrenContainer = styled.div(() => {
  return [
    tw`h-full w-16 fixed z-20 border-solid border-r transition-width overflow-hidden`,
    tw`bg-white`,
    tw`dark:bg-base-gradient-sidebar dark:border-gunmetal`,
    tw`hover:(w-64 overflow-auto)`,
  ]
})
