import type { SidebarType } from '@/types'

import React from 'react'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import Logo from '@/assets/images/logo/logo-crop.png'
import LogoMini from '@/assets/images/logo/logo-mini.png'
import { appSettingSelector } from '@/store/selector'

export type ContentProps = {
  className?: string
}

const FullLogo = () => <Image src={Logo} width={170} alt='Logo' />
const MiniLogo = () => <Image src={LogoMini} width={55} alt='Logo' className='ml-[theme(spacing.1)-1px]' />

export const Content: React.FC<ContentProps> = ({ className }) => {
  const { sidebarType } = useSelector(appSettingSelector)

  return (
    <div className={clsx('transition-width', className)}>
      {sidebarType !== 'mini' && (
        <StyledLogoWrap>
          <FullLogo />
        </StyledLogoWrap>
      )}

      {sidebarType === 'mini' && (
        <>
          <StyledLogoWrap id='logo' hidden>
            <FullLogo />
          </StyledLogoWrap>

          <StyledLogoWrap id='logo-mini'>
            <MiniLogo />
          </StyledLogoWrap>
        </>
      )}

      <br />
      <br />

      <p className='underline'>
        <Link href={'/'}>Dashboard</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/link-remember'}>Link Remember</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/to-do'}>Road Map</Link>
      </p>

      <p className='underline'>
        <Link href={'/error'}>Example Error Page</Link>
      </p>

      <p className='underline'>
        <Link href={'/not-found'}>Example Not-Found Page</Link>
      </p>
    </div>
  )
}

const StyledContent = styled.div<{ sidebarType: SidebarType }>(({ sidebarType }) => {
  return []
})

const StyledLogoWrap = styled.div<{ hidden?: boolean }>(({ hidden }) => {
  return [tw`items-center justify-center h-[--navbar-h]`, hidden ? tw`hidden` : tw`flex`]
})
