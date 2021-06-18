import { createSlice } from '@reduxjs/toolkit'

const sounds = createSlice({
  name: 'sounds',
  initialState: {
    items: [],
    errors: null
  },
  reducers: {
    setSounds: (store, action) => {
      store.items = action.payload
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    }
  }
})

export default thoughts 