import React from 'react'

import tw, { styled } from 'twin.macro'

type FullSidebarContainerProps = {
  children?: React.ReactNode
}

export const FullSidebarContainer: React.FC<FullSidebarContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div(() => {
  return [tw`h-full border-solid border-r transition-width bg-background`, tw`dark:border-gunmetal`]
})
