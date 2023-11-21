import type { LANG, SIDEBAR_TYPE, THEME } from '@/constants'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export type AppSettingState = {
  theme: (typeof THEME)[keyof typeof THEME]
  lang: (typeof LANG)[keyof typeof LANG]
  sidebarCollapsed: boolean
  sidebarType: (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
}

// NOTE: this is the initial state of the appSetting, not the default setting
// For the app default setting, please see in the `src/hooks` folder
const initialState: AppSettingState = {
  theme: 'dark',
  lang: 'en',
  sidebarCollapsed: false,
  sidebarType: 'normal',
}

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
  },
})

export const { setTheme, setLang, setSidebarCollapsed, setSidebarType } =
  appSettingSlice.actions

export default appSettingSlice.reducer
