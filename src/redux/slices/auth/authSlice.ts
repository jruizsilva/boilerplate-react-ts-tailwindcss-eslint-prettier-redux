import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AxiosError, type AxiosResponse } from 'axios'
import { type AppDispatch } from 'redux/store'
import axiosInstance from 'utils/axios'
import { PURGE } from 'redux-persist'

type AccessTokenType = string | null

export interface Login {
  email: string
  password: string
}
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
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState
    })
  }
})

export const { setAccessToken } = authSlice.actions

export default authSlice

// export const login = async (
//   data: Login,
//   dispatch: AppDispatch
// ): Promise<AxiosResponse | AxiosError> => {
//   try {
//     const response = await axiosInstance.post('/login', data)
//     dispatch(setAccessToken(response.data.token))
//     return response
//   } catch (error) {
//     return error as AxiosError
//   }
// }

export const login = (data: Login) => {
  return async (dispatch: AppDispatch) => {
    const response = await axiosInstance.post('/login', data)
    console.log(response.data)
    dispatch(setAccessToken(response.data.token))
  }
}
