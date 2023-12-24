import { Switch } from '@nextui-org/react'
import { useSelector } from 'react-redux'

import { SIDEBAR_STYLE } from '@/constants'
import { useSidebarStyle } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { toCapitalCase } from '@/utils'

import { Item } from './Item'

export const ToggleSidebarStyle = () => {
  const { sidebarStyle } = useSelector(appSettingSelector)
  const { toggleSetting } = useSidebarStyle()

  return (
    <Item label='Sidebar Style' center>
      <p className='cursor-pointer' onClick={() => toggleSetting(SIDEBAR_STYLE.CLASSIC)}>
        {toCapitalCase(SIDEBAR_STYLE.CLASSIC)}
      </p>

      <Switch
        defaultSelected
        size='lg'
        value={sidebarStyle}
        isSelected={sidebarStyle === SIDEBAR_STYLE.MODERN}
        onValueChange={(isModern) => {
          toggleSetting(isModern ? SIDEBAR_STYLE.MODERN : SIDEBAR_STYLE.CLASSIC)
        }}
      />

      <p className='cursor-pointer' onClick={() => toggleSetting(SIDEBAR_STYLE.MODERN)}>
        {toCapitalCase(SIDEBAR_STYLE.MODERN)}
      </p>
    </Item>
  )
}
