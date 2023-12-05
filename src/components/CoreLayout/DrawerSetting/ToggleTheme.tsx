import { Switch } from '@nextui-org/react'
import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { THEME } from '@/constants'
import { useTheme } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { toCapitalCase } from '@/utils'

import { Item } from './Item'

export const ToggleTheme = () => {
  const { theme } = useSelector(appSettingSelector)
  const { toggleTheme } = useTheme()

  return (
    <Item label='Theme' center>
      <p className='cursor-pointer' onClick={() => toggleTheme(THEME.LIGHT)}>
        {toCapitalCase(THEME.LIGHT)}
      </p>

      <Switch
        defaultSelected
        size='lg'
        startContent={<Icon name='FaRegSun' />}
        endContent={<Icon name='FaRegMoon' />}
        value={theme}
        isSelected={theme === THEME.LIGHT}
        onValueChange={(isLight) => {
          toggleTheme(isLight ? THEME.LIGHT : THEME.DARK)
        }}
      />

      <p className='cursor-pointer' onClick={() => toggleTheme(THEME.DARK)}>
        {toCapitalCase(THEME.DARK)}
      </p>
    </Item>
  )
}
