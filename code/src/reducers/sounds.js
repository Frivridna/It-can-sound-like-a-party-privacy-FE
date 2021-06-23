import { createSlice } from '@reduxjs/toolkit'

const sounds = createSlice({ 
  name: 'sounds',
  initialState: {
    items: [{
      name: null,
      url: null,
      description: null,
      playable: null
    }],
    error: null
  },
  reducers: {
    setSounds: (store, action) => {
      store.items = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
})

export default sounds