import { isMobile } from 'react-device-detect'

import { DRAWER_POSITION, LANG, SIDEBAR_TYPE, THEME } from '@/constants'

export const DEFAULT_APP_SETTING = {
  theme: THEME.DARK,
  lang: LANG.EN,
  sidebarType: isMobile ? SIDEBAR_TYPE.DRAWER : SIDEBAR_TYPE.FULL,
  drawerPosition: DRAWER_POSITION.RIGHT,
}
