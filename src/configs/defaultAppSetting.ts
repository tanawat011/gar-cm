import { isMobile } from 'react-device-detect'

import { DRAWER_POSITION, LANG, NAVBAR_TYPE, SIDEBAR_TYPE, SIDEBAR_STYLE, NAVBAR_STYLE } from '@/constants'
import { TW_THEME } from '@/libs/pureTailwind'

export const DEFAULT_APP_SETTING = {
  theme: TW_THEME.DARK,
  lang: LANG.EN,
  sidebarType: isMobile ? SIDEBAR_TYPE.DRAWER : SIDEBAR_TYPE.FULL,
  sidebarStyle: SIDEBAR_STYLE.MODERN,
  drawerPosition: DRAWER_POSITION.RIGHT,
  navbarType: NAVBAR_TYPE.STICKY,
  navbarStyle: NAVBAR_STYLE.MODERN,
}
