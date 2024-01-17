import type { Permission } from '@/configs'
import type { UserProfile } from '@auth0/nextjs-auth0/client'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export type ProfileState = UserProfile & {
  permission: Permission[]
}

const initialState: ProfileState = {
  email: '',
  email_verified: false,
  family_name: '',
  given_name: '',
  locale: '',
  name: '',
  nickname: '',
  picture: '',
  sub: '',
  updated_at: '',
  permission: [],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
