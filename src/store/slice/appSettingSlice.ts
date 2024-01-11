import type { Lang } from '@/constants'
import type { TwTheme } from '@/libs/pureTailwind'
import type { DrawerPosition, NavbarStyle, NavbarType, SidebarStyle, SidebarType } from '@/types'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

import { DEFAULT_APP_SETTING } from '@/configs'

export type AppSettingState = {
  theme: TwTheme
  lang: Lang
  sidebarType: SidebarType
  sidebarStyle: SidebarStyle
  drawerPosition: DrawerPosition
  navbarType: NavbarType
  navbarStyle: NavbarStyle
}

// NOTE: this is the initial state of the appSetting, not the default setting
// For the app default setting, please see in the `src/hooks` folder
const initialState: AppSettingState = DEFAULT_APP_SETTING

export const appSettingSlice = createSlice({
  name: 'appSetting',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<AppSettingState['theme']>) => {
      state.theme = action.payload
    },
    setLang: (state, action: PayloadAction<AppSettingState['lang']>) => {
      state.lang = action.payload
    },
    setSidebarType: (state, action: PayloadAction<AppSettingState['sidebarType']>) => {
      state.sidebarType = action.payload
    },
    setSidebarStyle: (state, action: PayloadAction<AppSettingState['sidebarStyle']>) => {
      state.sidebarStyle = action.payload
    },
    setDrawerPosition: (state, action: PayloadAction<AppSettingState['drawerPosition']>) => {
      state.drawerPosition = action.payload
    },
    setNavbarType: (state, action: PayloadAction<AppSettingState['navbarType']>) => {
      state.navbarType = action.payload
    },
    setNavbarStyle: (state, action: PayloadAction<AppSettingState['navbarStyle']>) => {
      state.navbarStyle = action.payload
    },
  },
})

export const { setTheme, setLang, setSidebarType, setSidebarStyle, setDrawerPosition, setNavbarType, setNavbarStyle } =
  appSettingSlice.actions

export default appSettingSlice.reducer
