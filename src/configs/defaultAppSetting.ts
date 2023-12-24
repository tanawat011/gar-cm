import { isMobile } from 'react-device-detect'

import { DRAWER_POSITION, LANG, NAVBAR_TYPE, SIDEBAR_TYPE, THEME, THEME_STYLE } from '@/constants'

export const DEFAULT_APP_SETTING = {
  theme: THEME.DARK,
  themeStyle: THEME_STYLE.MODERN,
  lang: LANG.EN,
  sidebarType: isMobile ? SIDEBAR_TYPE.DRAWER : SIDEBAR_TYPE.FULL,
  drawerPosition: DRAWER_POSITION.RIGHT,
  navbarType: NAVBAR_TYPE.STICKY,
}
