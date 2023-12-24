import React from 'react'

import { isMobile } from 'react-device-detect'
import tw, { styled } from 'twin.macro'

type ContentContainerProps = {
  children: React.ReactNode
  setIsScrolled: (isScrolled: boolean) => void
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children, setIsScrolled }) => {
  return (
    <StyledContentContainer
      onScroll={(e) => {
        const scrollTop = (e.target as HTMLElement)?.scrollTop

        setIsScrolled(scrollTop > 0)
      }}
    >
      {children}
    </StyledContentContainer>
  )
}

const StyledContentContainer = styled.div(() => {
  return [
    tw`overflow-auto scroll-smooth scrolling-touch relative transition-width w-full`,
    isMobile ? tw`h-full mt-16` : tw`scrolling-auto h-screen`,
  ]
})
