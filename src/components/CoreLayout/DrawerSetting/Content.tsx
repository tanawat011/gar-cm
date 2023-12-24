import { useEffect } from 'react'

import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'

import { Divider } from '@/components/Common'
import { Icon } from '@/components/Icon'
import { useDrawerPosition } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

import { ToggleCoreColors } from './ToggleCoreColors'
import { ToggleDrawerPosition } from './ToggleDrawerPosition'
import { ToggleLang } from './ToggleLang'
import { ToggleNavbarFix } from './ToggleNavbarFix'
import { ToggleSidebarStyle } from './ToggleSidebarStyle'
import { ToggleSidebarType } from './ToggleSidebarType'
import { ToggleTheme } from './ToggleTheme'

export const coreDrawerId = 'drawer'

export const Content = () => {
  const { drawerPosition } = useSelector(appSettingSelector)

  const { togglePosition } = useDrawerPosition()

  useEffect(() => {
    togglePosition(drawerPosition)
  }, [drawerPosition])

  return (
    <>
      <div className='my-4'>
        <div className='text-xl font-bold flex'>
          <span className='mr-2'>
            <Icon name='FaGear' />
          </span>
          <span>Configurations</span>
        </div>

        <p className='flex items-center text-slate-400'>
          <span>See all setting</span>
        </p>
      </div>

      <Divider />

      <ToggleCoreColors />

      <ToggleTheme />

      <ToggleSidebarStyle />

      <ToggleNavbarFix />

      <ToggleLang />

      {!isMobile && <ToggleSidebarType />}

      <ToggleDrawerPosition />
    </>
  )
}
