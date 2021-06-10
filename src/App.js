import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import socketIOClient from "socket.io-client"
// const socket = socketIOClient(ENDPOINT)

import { ENDPOINT } from './reusable/urls'

import Createroom from './pages/Createroom'
import Sessionpage from './pages/Sessionpage'
import Entrance from './pages/Entrance'
import Joinroom from './pages/Joinroom'
export const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Entrance ENDPOINT={ENDPOINT}/>
        </Route>
        <Route path="/createroom" exact >
          <Createroom ENDPOINT={ENDPOINT} />
        </Route>
        <Route path="/joinroom" exact >
          <Joinroom ENDPOINT={ENDPOINT} />
        </Route>
        <Route path="/session/:room" exact >
          <Sessionpage ENDPOINT={ENDPOINT} />
        </Route>
      </Switch>
    </BrowserRouter>
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