import type { DrawerPosition } from '@/types'

import { useSelector } from 'react-redux'

import { Tabs } from '@/components/Common'
import { DRAWER_POSITION_LABEL } from '@/constants'
import { useDrawerPosition } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

import { Item } from './Item'

export const ToggleDrawerPosition = () => {
  const { drawerPosition } = useSelector(appSettingSelector)
  const { togglePosition } = useDrawerPosition()

  return (
    <Item label='Drawer Position' center hideDivider>
      <Tabs
        items={[...DRAWER_POSITION_LABEL]}
        selectedKey={drawerPosition}
        onSelectionChange={(key) => togglePosition(key as DrawerPosition)}
        fullWidth
        size='sm'
        radius='full'
      />
    </Item>
  )
}
