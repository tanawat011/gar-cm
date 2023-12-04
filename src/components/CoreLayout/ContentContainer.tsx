import React from 'react'

import { isMobile } from 'react-device-detect'
import tw, { styled } from 'twin.macro'

type ContentContainerProps = {
  children: React.ReactNode
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return <StyledContentContainer>{children}</StyledContentContainer>
}

const StyledContentContainer = styled.div(() => {
  return [
    tw`overflow-auto scroll-smooth scrolling-touch relative transition-width w-full`,
    tw`bg-white`,
    tw`dark:bg-base-gradient-content`,
    isMobile ? tw`h-full mt-16` : tw`scrolling-auto h-screen`,
  ]
})
