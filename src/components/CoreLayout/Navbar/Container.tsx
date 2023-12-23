import type { NavbarType } from '@/types'

import React from 'react'

import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import { appSettingSelector } from '@/store/selector'

import { LeftContainer } from './Left'
import { RightContainer } from './Right'

type NavbarContainerProps = {
  id: string
}

export const Container: React.FC<NavbarContainerProps> = ({ id }) => {
  const { navbarType } = useSelector(appSettingSelector)

  return (
    <StyledContainer id={id} $navbarType={navbarType} $isMobile={isMobile}>
      <LeftContainer />

      <RightContainer />
    </StyledContainer>
  )
}

const StyledContainer = styled.div<{ $navbarType: NavbarType; $isMobile: boolean }>(({ $navbarType, $isMobile }) => {
  return [
    tw`flex justify-between w-full`,
    !$isMobile && $navbarType === 'sticky' && tw`sticky top-0 bg-background`,
    $isMobile && tw`fixed`,
  ]
})
