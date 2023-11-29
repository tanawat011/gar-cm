import { useContext } from 'react'

import tw, { styled } from 'twin.macro'

import { Icon } from '@/components/Icon'

import { CoreLayoutContext } from '../../Provider'

export const ToggleDrawerSetting = () => {
  const { onToggleDrawer } = useContext(CoreLayoutContext)

  return (
    <StyledDrawerToggleIcon onClick={() => onToggleDrawer(true)}>
      <Icon name='FaGear' />
    </StyledDrawerToggleIcon>
  )
}

const StyledDrawerToggleIcon = styled.div(() => {
  return [tw`cursor-pointer mx-3 hover:opacity-80`, tw`block`, tw`lg:hidden`]
})
