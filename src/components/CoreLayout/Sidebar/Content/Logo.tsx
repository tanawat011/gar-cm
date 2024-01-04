import Image from 'next/image'
import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import LogoFull from '@/assets/images/logo/logo-crop.png'
import LogoMini from '@/assets/images/logo/logo-mini-crop.png'
import { appSettingSelector } from '@/store/selector'

const FullLogo = () => <Image src={LogoFull} height={59} alt='Full Logo' priority />
const MiniLogo = () => <Image src={LogoMini} height={59} alt='Mini Logo' priority />

export const Logo = () => {
  const { sidebarType } = useSelector(appSettingSelector)

  return (
    <>
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
    </>
  )
}

const StyledLogoWrap = styled.div<{ hidden?: boolean }>(({ hidden }) => {
  return [tw`flex justify-center items-center h-[--navbar-h]`, hidden ? tw`hidden` : tw`flex`]
})
