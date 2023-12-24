import type { SidebarType } from '@/types'

import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import { appSettingSelector } from '@/store/selector'
import pkg from '~/package.json'

export const Footer = () => {
  const { sidebarType } = useSelector(appSettingSelector)

  return (
    <StyledFooterWrap>
      <div className='flex flex-col items-center justify-center mt-4'>
        <p>
          <StyledPoweredBy id='powered-by' $sidebarType={sidebarType}>
            Powered by
          </StyledPoweredBy>{' '}
          <span>tDev</span>
        </p>
        <p>v{pkg?.version}</p>
      </div>
    </StyledFooterWrap>
  )
}

const StyledFooterWrap = styled.div(() => {
  return [
    tw`h-[var(--navbar-h)] flex flex-col items-center justify-center text-sm border-solid border-t`,
    tw`dark:border-gunmetal`,
  ]
})

const StyledPoweredBy = styled.span<{ $sidebarType: SidebarType }>(({ $sidebarType }) => {
  return [$sidebarType === 'mini' && tw`hidden`]
})
