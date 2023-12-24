import { useContext } from 'react'

import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'

export const coreDrawerId = 'drawer'

export const Container = () => {
  const { openDrawer, onToggleDrawer } = useContext(CoreLayoutContext)
  const { drawerPosition } = useSelector(appSettingSelector)

  return (
    <Drawer
      id={coreDrawerId}
      position={drawerPosition}
      className='p-4 flex flex-col'
      containerClassName='bg-content1'
      open={openDrawer}
      onClose={() => onToggleDrawer(false)}
    >
      <Content />
    </Drawer>
  )
}
