import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SocketContext, socket } from './service/socket'

import Createroom from './pages/Createroom'
import Sessionpage from './pages/Sessionpage'
import Entrance from './pages/Entrance'
import Joinroom from './pages/Joinroom'
import Rejoinroom from './pages/Rejoinroom'
import Login from './pages/Login'
import Sounds from './pages/Sounds'
import Start from './pages/Startpage'
import FinishPage from './pages/FinishPage'
import About from './pages/About'

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
            <Route path="/" exact component={Start} />
            <Route path="/entrance" exact component={Entrance} />
            <Route path="/createroom" exact component={Createroom} />
            <Route path="/joinroom" exact component={Joinroom} />
            <Route path="/rejoinroom" exact component={Rejoinroom} />
            <Route path="/session/:room" exact component={Sessionpage} /> 
            <Route path="/login" exact component={Login} /> 
            <Route path="/sounds" exact component={Sounds} /> 
            <Route path="/goodbye" exact component={FinishPage} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </SocketContext.Provider>
  )
}