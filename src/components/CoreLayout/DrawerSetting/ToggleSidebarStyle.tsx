import { useSelector } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs'
import { LS_SIDEBAR_STYLE, SIDEBAR_STYLE_LABEL } from '@/constants'
import { appSettingSelector } from '@/store/selector'
import { setSidebarStyle } from '@/store/slice'

import { ToggleAppSetting } from './ToggleAppSetting'

export const ToggleSidebarStyle = () => {
  const { sidebarStyle } = useSelector(appSettingSelector)

  return (
    <ToggleAppSetting
      title='Sidebar Style'
      value={sidebarStyle}
      defaultValue={DEFAULT_APP_SETTING.sidebarStyle}
      storageName={LS_SIDEBAR_STYLE}
      dispatchSetting={setSidebarStyle}
      items={[...SIDEBAR_STYLE_LABEL]}
    />
  )
}
