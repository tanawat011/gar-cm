import { Icon } from '@/components/Icon'
import { useTheme } from '@/hooks'

export const ToggleTheme = () => {
  const { themeIcon, toggleTheme } = useTheme()

  return (
    <Icon
      name={themeIcon}
      className='cursor-pointer mx-3 hover:opacity-80'
      onClick={toggleTheme}
    />
  )
}
