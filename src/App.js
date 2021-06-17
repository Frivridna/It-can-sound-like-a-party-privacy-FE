import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import socketIOClient from "socket.io-client"
//import io from 'socket.io-client'
import { SocketContext, socket } from './service/socket'

import Createroom from './pages/Createroom'
import Sessionpage from './pages/Sessionpage'
//import UserBSession from './pages/UserBSession'
import Entrance from './pages/Entrance'
import Joinroom from './pages/Joinroom'
import Login from './pages/Login'
import Test from './pages/Test'
import FinishPage from './components/FinishPage'

//import { ENDPOINT } from './reusable/urls'
//const socket = socketIOClient(ENDPOINT)
import credentials from './reducers/credentials'

const reducer = combineReducers({
  credentials: credentials.reducer
})

const store = configureStore({ reducer })



export const App = () => {
 // ENDPOINT={ENDPOINT}
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
              <Test />
            </Route>
            <Route path="/goodbye" component={FinishPage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </SocketContext.Provider>
  )
}

// old version ! ---> Check the return! :) aka Clean up the useEffect. 

/*
export const App = () => {
  const [response, setResponse] = useState(""); // {} receive sound file in a useState react ???? 

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    //const socket = io.connect('http://localhost:4001') 
    socket.on("FromAPI", data => {
      setResponse(data)
    });
    // Clean up the effect
    return () => socket.disconnect();
  }, []);

  return (
    <p>
    </p>
  );
}
*/