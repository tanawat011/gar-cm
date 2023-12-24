import { useSelector } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs'
import { LS_NAVBAR_STYLE, NAVBAR_STYLE_LABEL } from '@/constants'
import { appSettingSelector } from '@/store/selector'
import { setNavbarStyle } from '@/store/slice'

import { ToggleAppSetting } from './ToggleAppSetting'

export const ToggleNavbarStyle = () => {
  const { navbarStyle } = useSelector(appSettingSelector)

  return (
    <ToggleAppSetting
      title='Navbar Style'
      value={navbarStyle}
      defaultValue={DEFAULT_APP_SETTING.navbarStyle}
      storageName={LS_NAVBAR_STYLE}
      dispatchSetting={setNavbarStyle}
      items={[...NAVBAR_STYLE_LABEL]}
    />
  )
}
