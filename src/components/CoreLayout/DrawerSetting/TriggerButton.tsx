import { useContext } from 'react'

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
    tw`absolute right-0 top-36 rounded-l-full w-12 h-9 items-center justify-center pr-4 cursor-pointer`,
    tw`hidden`,
    tw`lg:flex`,
    tw`bg-red-300`,
    tw`dark:bg-red-300`,
  ]
})
