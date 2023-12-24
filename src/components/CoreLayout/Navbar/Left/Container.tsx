import { useContext } from 'react'

import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { useSidebar } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../../Provider'

export const Container = () => {
  const { onToggleSidebar } = useContext(CoreLayoutContext)

  const { toggleSidebarType } = useSidebar()
  const { sidebarType } = useSelector(appSettingSelector)

  return (
    <div className='py-4 flex items-center'>
      {sidebarType === 'full' && (
        <Icon name='FaOutdent' className='cursor-pointer mx-3' onClick={() => toggleSidebarType('mini')} />
      )}

      {sidebarType === 'mini' && (
        <Icon name='FaIndent' className='cursor-pointer mx-3' onClick={() => toggleSidebarType('full')} />
      )}

      {sidebarType === 'drawer' && (
        <Icon name='FaBars' className='cursor-pointer mx-3' onClick={() => onToggleSidebar(true)} />
      )}
    </div>
  )
}
