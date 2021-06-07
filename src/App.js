import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import socketIOClient from "socket.io-client"
// const ENDPOINT = "http://localhost:4001" // add to reusable folder 
// const socket = socketIOClient(ENDPOINT)

import Roompage from './pages/Roompage'
import Sessionpage from './pages/Sessionpage'

export const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Roompage />
        </Route>
        <Route path="/session/:room" exact >
          <Sessionpage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

// old version ! 

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
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}
*/