import { useContext } from 'react'

import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { TAG_ID } from '@/constants'
import { useSidebar } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const LeftContainer: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const { onToggleSidebar } = useContext(CoreLayoutContext)

  const { toggleSidebarType } = useSidebar(isMobileDevice)
  const { sidebarType } = useSelector(appSettingSelector)

  return (
    <div className='ml-6 py-4 flex items-center'>
      {sidebarType === 'full' && (
        <Icon
          id={TAG_ID.SIDEBAR_TOGGLE_ICON_DRAWER}
          name='FaOutdent'
          className='cursor-pointer mx-3'
          onClick={() => toggleSidebarType('mini')}
        />
      )}

      {sidebarType === 'mini' && (
        <Icon
          id={TAG_ID.SIDEBAR_TOGGLE_ICON_DRAWER}
          name='FaIndent'
          className='cursor-pointer mx-3'
          onClick={() => toggleSidebarType('full')}
        />
      )}

      {sidebarType === 'drawer' && (
        <Icon
          id={TAG_ID.SIDEBAR_TOGGLE_ICON_DRAWER}
          name='FaBars'
          className='cursor-pointer mx-3'
          onClick={() => onToggleSidebar(true)}
        />
      )}
    </div>
  )
}
