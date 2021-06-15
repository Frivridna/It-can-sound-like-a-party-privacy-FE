import React, { useState, useEffect } from 'react'
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

//import { ENDPOINT } from './reusable/urls'
//const socket = socketIOClient(ENDPOINT)


export const App = () => {
 // ENDPOINT={ENDPOINT}
  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
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
          <Route path="/session/:room" exact > {/*"/session/:room"*/}
            <Sessionpage />
          </Route>
          <Route path="/login" exact > 
            <Login />
          </Route>
  {/*         <Route path="/userbsession" exact > {/*"/userbsession/:room" */}
  {/*          <UserBSession ENDPOINT={ENDPOINT} /> */}
  {/*         </Route> */}
        </Switch>
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