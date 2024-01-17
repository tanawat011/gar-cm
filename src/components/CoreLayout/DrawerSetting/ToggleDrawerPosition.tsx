import { useSelector } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs'
import { DRAWER_POSITION_LABEL, LS_DRAWER_POS } from '@/constants'
import { appSettingSelector, setDrawerPosition } from '@/store/appSetting'

import { ToggleAppSetting } from './ToggleAppSetting'

export const ToggleDrawerPosition = () => {
  const { drawerPosition } = useSelector(appSettingSelector)

  return (
    <ToggleAppSetting
      toggleStyle='tab'
      title='Drawer Position'
      value={drawerPosition}
      defaultValue={DEFAULT_APP_SETTING.drawerPosition}
      storageName={LS_DRAWER_POS}
      dispatchSetting={setDrawerPosition}
      items={[...DRAWER_POSITION_LABEL]}
    />
  )
}
