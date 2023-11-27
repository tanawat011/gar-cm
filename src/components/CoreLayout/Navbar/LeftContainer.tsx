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

  const { toggleSidebarCollapse, toggleSidebarType } = useSidebar(isMobileDevice)
  const { sidebarCollapsed, sidebarType } = useSelector(appSettingSelector)

  const DesktopIcon = () => {
    return (
      <>
        {sidebarType !== 'drawer' &&
          (sidebarCollapsed ? (
            <Icon
              name='FaIndent'
              className='cursor-pointer mx-3 hidden md:block'
              onClick={() => toggleSidebarCollapse()}
            />
          ) : (
            <Icon
              name='FaOutdent'
              className='cursor-pointer mx-3 hidden md:block'
              onClick={() => toggleSidebarCollapse(true)}
            />
          ))}

        {sidebarType === 'drawer' && (
          <Icon
            id={TAG_ID.SIDEBAR_TOGGLE_ICON_DRAWER}
            name='FaBars'
            className='cursor-pointer mx-3'
            onClick={() => onToggleSidebar(true)}
          />
        )}
      </>
    )
  }

  const MobileIcon = () => {
    return <Icon name='FaBars' className={'cursor-pointer mx-3'} onClick={() => onToggleSidebar(true)} />
  }

  return (
    <div className='ml-6 py-4 flex items-center'>
      {isMobileDevice ? <MobileIcon /> : <DesktopIcon />}

      <Icon name='FaFile' className='cursor-pointer mx-3 hidden md:block' onClick={() => toggleSidebarType('drawer')} />
      <Icon name='FaFile' className='cursor-pointer mx-3 hidden md:block' onClick={() => toggleSidebarType('mini')} />
      <Icon name='FaFile' className='cursor-pointer mx-3 hidden md:block' onClick={() => toggleSidebarType('full')} />
    </div>
  )
}
