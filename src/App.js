import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import socketIOClient from "socket.io-client"
// const ENDPOINT = "http://localhost:4001" // add to reusable folder 
// const socket = socketIOClient(ENDPOINT)

import Createroom from './pages/Createroom'
import Sessionpage from './pages/Sessionpage'
import Entrance from './pages/Entrance'
import Joinroom from './pages/Joinroom'

export const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Entrance />
        </Route>
        <Route path="/createroom" exact >
          <Createroom />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}


/*
<Route path="/joinroom" exact >
          <Joinroom />
        </Route>
        <Route path="/session/:room" exact >
          <Sessionpage />
        </Route>


*/







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