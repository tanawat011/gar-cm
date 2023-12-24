import { isMobile } from 'react-device-detect'

import { Divider } from '@/components/Common'
import { Icon } from '@/components/Icon'

import { ToggleCoreColors } from './ToggleCoreColors'
import { ToggleDrawerPosition } from './ToggleDrawerPosition'
import { ToggleLang } from './ToggleLang'
import { ToggleNavbarFix } from './ToggleNavbarFix'
import { ToggleNavbarStyle } from './ToggleNavbarStyle'
import { ToggleSidebarStyle } from './ToggleSidebarStyle'
import { ToggleSidebarType } from './ToggleSidebarType'
import { ToggleTheme } from './ToggleTheme'

export const coreDrawerId = 'drawer'

export const Content = () => {
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
      <ToggleLang />

      <ToggleNavbarFix />
      <ToggleNavbarStyle />

      {!isMobile && <ToggleSidebarType />}
      <ToggleSidebarStyle />

      <ToggleDrawerPosition />
    </>
  )
}
