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

  const isSticky = navbarType === 'sticky'
  const isStickyScrolled = isSticky && isScrolled

  return (
    <>
      <StyledContainer $navbarType={navbarType}>
        {isStickyScrolled && (
          <Card id={id} className='w-full m-4'>
            <CardBody className='flex flex-row items-center justify-between'>{renderNavbar()}</CardBody>
          </Card>
        )}

        {!isStickyScrolled && (
          <div id={id} className='flex flex-row items-center justify-between m-4 w-full p-3'>
            {renderNavbar()}
          </div>
        )}
      </StyledContainer>

      {isMobile && isSticky && <div className='h-[var(--navbar-h)]' />}
    </>
  )
}

const StyledContainer = styled.div<{ $navbarType: NavbarType }>(({ $navbarType }) => {
  const isSticky = $navbarType === 'sticky'

  return [tw`flex justify-between w-full`, isSticky && [tw`top-0 z-10`, isMobile ? tw`fixed` : tw`sticky`]]
})
