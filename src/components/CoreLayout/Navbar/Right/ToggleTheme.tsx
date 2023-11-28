import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { useTheme } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

export const ToggleTheme = () => {
  const { theme } = useSelector(appSettingSelector)
  const { themeIcon, toggleTheme } = useTheme()

  useEffect(() => {
    toggleTheme(theme, true)
  }, [theme])

  return (
    <Icon
      name={themeIcon}
      className='cursor-pointer mx-3 hover:opacity-80'
      onClick={() => toggleTheme()}
    />
  )
}
