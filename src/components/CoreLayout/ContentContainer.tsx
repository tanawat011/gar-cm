import React, { useEffect } from 'react'

import { isMobile } from 'react-device-detect'
import tw, { styled } from 'twin.macro'

type ContentContainerProps = {
  children: React.ReactNode
  setIsScrolled: (isScrolled: boolean) => void
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children, setIsScrolled }) => {
  // NOTE: This is for mobile only
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop

    setIsScrolled(scrollTop > 0)
  }

  // NOTE: This is for mobile only
  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <StyledContentContainer
      id='content-container'
      onScroll={(e) => {
        // NOTE: This is for desktop only
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
    isMobile ? tw`` : tw`scrolling-auto h-screen`,
  ]
})
