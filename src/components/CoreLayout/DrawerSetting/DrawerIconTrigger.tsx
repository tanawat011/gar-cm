import { DrawerTrigger } from '@/components/Common'
import { Icon } from '@/components/Icon'

import { coreDrawerId } from '.'

export const DrawerIconTrigger = () => {
  return (
    <DrawerTrigger
      id={coreDrawerId}
      className='absolute right-0 top-36 rounded-s-full w-12 h-9 bg-red-300 lg:flex hidden items-center justify-center pr-4 cursor-pointer'
    >
      <Icon name='FaGear' className='animate-spinner-linear-spin' />
    </DrawerTrigger>
  )
}
