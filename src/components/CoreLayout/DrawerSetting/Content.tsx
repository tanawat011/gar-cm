import { useEffect } from 'react'

import { Divider } from '@nextui-org/react'
import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { useDrawerPosition } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

import { ToggleCoreColors } from './ToggleCoreColors'
import { ToggleDrawerPosition } from './ToggleDrawerPosition'
import { ToggleLang } from './ToggleLang'
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
        <p className='text-xl font-bold flex'>
          <span className='mr-2'>
            <Icon name='FaGear' />
          </span>
          <span>Configurations</span>
        </p>

        <p className='flex items-center text-slate-400'>
          <span>See all setting</span>
        </p>
      </div>

      <Divider className='my-1' />

      <ToggleCoreColors />

      <ToggleTheme />

      <ToggleLang />

      {!isMobile && <ToggleSidebarType />}

      <ToggleDrawerPosition />
    </>
  )
}
