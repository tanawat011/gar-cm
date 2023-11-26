import { DrawerTrigger } from '@/components/Common'
import { Icon } from '@/components/Icon'

import { coreDrawerId } from '.'

export const DrawerIconNavbarTrigger = () => {
  return (
    <DrawerTrigger
      id={coreDrawerId}
      className='cursor-pointer mx-3 hover:opacity-80 block lg:hidden'
    >
      <Icon name='FaGear' />
    </DrawerTrigger>
  )
}
