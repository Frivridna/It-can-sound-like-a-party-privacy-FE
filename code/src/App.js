import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SocketContext, socket } from './service/socket'

import Createroom from './pages/Createroom'
import Sessionpage from './pages/Sessionpage'
import Entrance from './pages/Entrance'
import Joinroom from './pages/Joinroom'
import Login from './pages/Login'
import Sounds from './pages/Sounds'
import Start from './pages/Startpage'
import FinishPage from './pages/FinishPage'

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
          <Route path="/" component={Start} />
            <Route path="/entrance" component={Entrance} />
            <Route path="/createroom" component={Createroom} />
            <Route path="/joinroom" component={Joinroom} />
            <Route path="/session/:room" component={Sessionpage} /> 
            <Route path="/login" component={Login} /> 
            <Route path="/sounds" component={Sounds} /> 
            <Route path="/goodbye" component={FinishPage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </SocketContext.Provider>
  )
}