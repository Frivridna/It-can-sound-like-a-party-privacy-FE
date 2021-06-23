import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('credentials')
    ? {
        username: JSON.parse(localStorage.getItem('credentials')).username,
        accessToken: JSON.parse(localStorage.getItem('credentials')).accessToken,
        error: null
    }
    : {
        username: null,
        accessToken: null,
        error: null,
    }

const credentials = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setError: (store, action) => {
            store.error = action.payload
        },
        logOut: (store, action) => { 
            store.username = null
            store.accessToken = null
        },
    }
})

export default credentials