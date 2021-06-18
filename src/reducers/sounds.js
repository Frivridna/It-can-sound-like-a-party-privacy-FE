import { createSlice } from '@reduxjs/toolkit'

const sounds = createSlice({ //here we might need to change and add like setName, setUrl, setDescription etc. if now it does not work.
  name: 'sounds',
  initialState: {
    items: [{
      name: null,
      url: null,
      description: null,
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