import { useContext } from 'react'

import { Icon } from '@/components/Icon'

import { CoreLayoutContext } from '../Provider'

export const DrawerIconNavbarTrigger = () => {
  const { onToggleDrawer } = useContext(CoreLayoutContext)

  return (
    <div className='cursor-pointer mx-3 hover:opacity-80 block lg:hidden' onClick={() => onToggleDrawer(true)}>
      <Icon name='FaGear' />
    </div>
  )
}
