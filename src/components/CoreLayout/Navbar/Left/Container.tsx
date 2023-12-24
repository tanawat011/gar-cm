import { useContext, useEffect } from 'react'

import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { DEFAULT_APP_SETTING } from '@/configs'
import { LS_SIDEBAR_TYPE, SIDEBAR_TYPE_LABEL } from '@/constants'
import { useToggleAppSetting } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { setSidebarType } from '@/store/slice'

import { CoreLayoutContext } from '../../Provider'

export const Container = () => {
  const { onToggleSidebar } = useContext(CoreLayoutContext)

  const { sidebarType } = useSelector(appSettingSelector)
  const { toggleSetting } = useToggleAppSetting({
    storageName: LS_SIDEBAR_TYPE,
    defaultValue: DEFAULT_APP_SETTING.sidebarType,
    items: [...SIDEBAR_TYPE_LABEL],
    dispatchSetting: setSidebarType,
  })

  useEffect(() => {
    if (isMobile) {
      toggleSetting('drawer')
    }
  }, [])

  return (
    <div className='py-4 flex items-center'>
      {sidebarType === 'full' && (
        <Icon name='FaOutdent' className='cursor-pointer mx-3' onClick={() => toggleSetting('mini')} />
      )}

      {sidebarType === 'mini' && (
        <Icon name='FaIndent' className='cursor-pointer mx-3' onClick={() => toggleSetting('full')} />
      )}

      {sidebarType === 'drawer' && (
        <Icon name='FaBars' className='cursor-pointer mx-3' onClick={() => onToggleSidebar(true)} />
      )}
    </div>
  )
}
