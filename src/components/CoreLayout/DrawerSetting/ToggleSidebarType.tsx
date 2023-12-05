import type { SidebarType } from '@/types'

import { useSelector } from 'react-redux'

import { Tabs } from '@/components/Common'
import { SIDEBAR_TYPE_LABEL } from '@/constants'
import { useSidebar } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

import { Item } from './Item'

export const ToggleSidebarType = () => {
  const { sidebarType } = useSelector(appSettingSelector)
  const { toggleSidebarType } = useSidebar()

  return (
    <Item label='Sidebar Type' center>
      <Tabs
        items={[...SIDEBAR_TYPE_LABEL]}
        selectedKey={sidebarType}
        onSelectionChange={(key) => toggleSidebarType(key as SidebarType)}
        fullWidth
        size='sm'
        radius='full'
      />
    </Item>
  )
}
