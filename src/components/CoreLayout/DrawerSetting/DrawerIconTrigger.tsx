import { useContext } from 'react'

import { Icon } from '@/components/Icon'

import { CoreLayoutContext } from '../Provider'

export const DrawerIconTrigger = () => {
  const { onToggleDrawer } = useContext(CoreLayoutContext)

  return (
    <div
      className='absolute right-0 top-36 rounded-s-full w-12 h-9 bg-red-300 lg:flex hidden items-center justify-center pr-4 cursor-pointer'
      onClick={() => onToggleDrawer(true)}
    >
      <Icon name='FaGear' className='animate-spinner-linear-spin' />
    </div>
  )
}
