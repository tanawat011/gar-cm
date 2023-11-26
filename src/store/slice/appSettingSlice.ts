import type { THEME, DRAWER_POSITION, LANG, SIDEBAR_TYPE } from '@/constants'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'

export type AppSettingState = {
  theme: (typeof THEME)[keyof typeof THEME]
  lang: (typeof LANG)[keyof typeof LANG]
  sidebarCollapsed: boolean
  sidebarType: (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
  drawerPosition: (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]
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
    setSidebarCollapsed: (
      state,
      action: PayloadAction<AppSettingState['sidebarCollapsed']>,
    ) => {
      state.sidebarCollapsed = action.payload
    },
    setSidebarType: (
      state,
      action: PayloadAction<AppSettingState['sidebarType']>,
    ) => {
      state.sidebarType = action.payload
    },
    setDrawerPosition: (
      state,
      action: PayloadAction<AppSettingState['drawerPosition']>,
    ) => {
      state.drawerPosition = action.payload
    },
  },
})

export const {
  setTheme,
  setLang,
  setSidebarCollapsed,
  setSidebarType,
  setDrawerPosition,
} = appSettingSlice.actions

export default appSettingSlice.reducer
