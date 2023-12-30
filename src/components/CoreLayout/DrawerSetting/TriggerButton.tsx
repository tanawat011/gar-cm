import { useContext } from 'react'

import { isMobile } from 'react-device-detect'
import tw, { styled } from 'twin.macro'

import { Icon } from '@/components/Icon'

import { CoreLayoutContext } from '../Provider'

export const TriggerButton = () => {
  const { onToggleDrawer } = useContext(CoreLayoutContext)

  return (
    <StyledContainer onClick={() => onToggleDrawer(true)}>
      <Icon name='FaGear' className='animate-spinner-linear-spin' />
    </StyledContainer>
  )
}

const StyledContainer = styled.div(() => {
  return [
    tw`right-0 bottom-20 rounded-l-full w-12 h-9 items-center justify-center pr-4 cursor-pointer`,
    isMobile ? tw`fixed` : tw`absolute`, // NOTE: This is for mobile only
    tw`hidden`,
    tw`lg:flex`,
    tw`bg-primary`,
    tw`dark:bg-primary`,
  ]
})
