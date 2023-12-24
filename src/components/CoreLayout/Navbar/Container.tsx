import type { NavbarType } from '@/types'

import React from 'react'

import { Card, CardBody } from '@nextui-org/react'
import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import { appSettingSelector } from '@/store/selector'

import { LeftContainer } from './Left'
import { RightContainer } from './Right'

type NavbarContainerProps = {
  id: string
  isScrolled?: boolean
}

export const Container: React.FC<NavbarContainerProps> = ({ id, isScrolled }) => {
  const { navbarType } = useSelector(appSettingSelector)

  const renderNavbar = () => (
    <>
      <LeftContainer />
      <RightContainer />
    </>
  )

  const isStickyScrolled = navbarType === 'sticky' && isScrolled

  return (
    <StyledContainer id={id} $navbarType={navbarType} $isMobile={isMobile}>
      {isStickyScrolled && (
        <Card className='w-full m-4'>
          <CardBody className='flex flex-row items-center justify-between'>{renderNavbar()}</CardBody>
        </Card>
      )}

      {!isStickyScrolled && (
        <div className='flex flex-row items-center justify-between m-4 w-full p-3'>{renderNavbar()}</div>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.div<{ $navbarType: NavbarType; $isMobile: boolean }>(({ $navbarType, $isMobile }) => {
  return [
    tw`flex justify-between w-full`,
    !$isMobile && $navbarType === 'sticky' && tw`sticky top-0`,
    $isMobile && tw`fixed`,
  ]
})
