import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import socketIOClient from "socket.io-client"
//import io from 'socket.io-client'
import { SocketContext, socket } from './service/socket'

import Createroom from './pages/Createroom'
import Sessionpage from './pages/Sessionpage'
import Entrance from './pages/Entrance'
import Joinroom from './pages/Joinroom'
import Login from './pages/Login'
import Sounds from './pages/Sounds'
import FinishPage from './components/FinishPage'

//import { ENDPOINT } from './reusable/urls'
//const socket = socketIOClient(ENDPOINT)
import credentials from './reducers/credentials'
import sounds from './reducers/sounds'

const reducer = combineReducers({
  credentials: credentials.reducer,
  sounds: sounds.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
      <Provider store={store}>
          <Switch>
            <Route path="/" exact >
              <Entrance />
            </Route>
            <Route path="/createroom" exact >
              <Createroom />
            </Route>
            <Route path="/joinroom" exact >
              <Joinroom />
            </Route>
            <Route path="/session/:room" component={Sessionpage} /> 
            <Route path="/login" exact > 
              <Login />
            </Route>
            <Route path="/sounds" exact > 
              <Sounds />
            </Route>
            <Route path="/goodbye" component={FinishPage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </SocketContext.Provider>
  )
}