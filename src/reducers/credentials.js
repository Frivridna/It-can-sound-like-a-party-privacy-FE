import { createSlice } from '@reduxjs/toolkit'
import { batch } from 'react-redux'
import { API_URL } from '../reusable/urls'

const initialItems = localStorage.getItem('credentials')
    ? JSON.parse(localStorage.getItem('credentials'))
    : {
        username: null,
        accessToken: null,
        error: null,
        secret: ''
    }

const credentials = createSlice({
    name: 'credentials',
    initialState: initialItems,
    reducers: {
        setUsername: (store, action) => {
            localStorage.setItem('credentials', JSON.stringify({ 
                username: action.payload, 
                accessToken: store.accessToken, 
                error: store.error,
                //secret: store.secret
            }))
            store.username = action.payload
        },
        setAccessToken: (store, action) => {
            localStorage.setItem('credentials', JSON.stringify({ 
                username: store.username, 
                accessToken: action.payload, 
                error: store.error,
                //secret: store.secret
            }))
            store.accessToken = action.payload
        },
        setError: (store, action) => {
            localStorage.setItem('credentials', JSON.stringify({ 
                username: store.username, 
                accessToken: store.accessToken, 
                error: action.payload,
                //secret: store.secret
            }))
            store.error = action.payload
        },
        logOut: (store, action) => {
            store.username = null
            store.accessToken = null
        },
        // setSecret: (store, action) => {
        //     console.log(action.payload)
        //     store.secret = action.payload
        // }
    }
})

export const authenticate = (username, password, mode) => {
    return (dispatch, getState) => {
        const state = getState()
        const method = mode === 'sounds' ? 'GET' : 'POST'
        const options = mode === 'sounds' 
        ? {
            method: 'GET',
            headers: {
            'Content-type' : 'application/json',
            'Authorization' : state.credentials.accessToken
            }
        }
        : {
            method: 'POST',
            headers: {
            'Content-type' : 'application/json',
            'Authorization' : state.credentials.accessToken
            },
            body: JSON.stringify({ username, password })
        }
        fetch(API_URL(mode), options) // should it be mode or sounds here? 
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                    batch(() => {
                        dispatch(credentials.actions.setAccessToken(data.accessToken))
                        dispatch(credentials.actions.setUsername(data.username))
                        dispatch(credentials.actions.setError(null))
                    })
                
            } else {
                dispatch(credentials.actions.setError(data))
            }
        })
        .catch((error) => {
            dispatch(credentials.actions.setErrors(error))
        })
    }
}

export default credentials