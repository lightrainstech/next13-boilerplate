import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: {
    key: null,
    secret: null
  },
  dispatchValue: null
}

const storeSlice = createSlice({
  name: 'cvoReduxStore',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload
    },
    logout: () => initialState,
    setUserCreds: (state, action) => {
      state.user.key = action.payload.key
      state.user.secret = action.payload.secret
    }
  }
})
export const { setAuthToken, logout, setUserCreds } = storeSlice.actions
export default storeSlice.reducer
