import { Switch } from '@nextui-org/react'
import { useSelector } from 'react-redux'

import { THEME_STYLE } from '@/constants'
import { useThemeStyle } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { toCapitalCase } from '@/utils'

import { Item } from './Item'

export const ToggleThemeStyle = () => {
  const { themeStyle } = useSelector(appSettingSelector)
  const { toggleSetting } = useThemeStyle()

  return (
    <Item label='Theme Style' center>
      <p className='cursor-pointer' onClick={() => toggleSetting(THEME_STYLE.CLASSIC)}>
        {toCapitalCase(THEME_STYLE.CLASSIC)}
      </p>

      <Switch
        defaultSelected
        size='lg'
        value={themeStyle}
        isSelected={themeStyle === THEME_STYLE.MODERN}
        onValueChange={(isModern) => {
          toggleSetting(isModern ? THEME_STYLE.MODERN : THEME_STYLE.CLASSIC)
        }}
      />

      <p className='cursor-pointer' onClick={() => toggleSetting(THEME_STYLE.MODERN)}>
        {toCapitalCase(THEME_STYLE.MODERN)}
      </p>
    </Item>
  )
}
