import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken']
}

const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, authSlice.reducer)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
