import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type AccessTokenType = string | null

export interface AuthState {
  accessToken: AccessTokenType
}

const initialState: AuthState = {
  accessToken: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<AccessTokenType>
    ) => {
      state.accessToken = action.payload
    }
  }
})

export const { setAccessToken } = authSlice.actions

export default authSlice
