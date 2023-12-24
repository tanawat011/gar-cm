import { useSelector } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs'
import { LS_NAVBAR_TYPE, NAVBAR_TYPE_LABEL } from '@/constants'
import { appSettingSelector } from '@/store/selector'
import { setNavbarType } from '@/store/slice'

import { ToggleAppSetting } from './ToggleAppSetting'

export const ToggleNavbarFix = () => {
  const { navbarType } = useSelector(appSettingSelector)

  return (
    <ToggleAppSetting
      title='Navbar Fixed'
      value={navbarType}
      defaultValue={DEFAULT_APP_SETTING.navbarType}
      storageName={LS_NAVBAR_TYPE}
      dispatchSetting={setNavbarType}
      items={[...NAVBAR_TYPE_LABEL]}
    />
  )
}
