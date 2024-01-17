import { useSelector } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs'
import { LS_SIDEBAR_TYPE, SIDEBAR_TYPE_LABEL } from '@/constants'
import { appSettingSelector, setSidebarType } from '@/store/appSetting'

import { ToggleAppSetting } from './ToggleAppSetting'

export const ToggleSidebarType = () => {
  const { sidebarType } = useSelector(appSettingSelector)

  return (
    <ToggleAppSetting
      toggleStyle='tab'
      title='Sidebar Type'
      value={sidebarType}
      defaultValue={DEFAULT_APP_SETTING.sidebarType}
      storageName={LS_SIDEBAR_TYPE}
      dispatchSetting={setSidebarType}
      items={[...SIDEBAR_TYPE_LABEL]}
    />
  )
}
