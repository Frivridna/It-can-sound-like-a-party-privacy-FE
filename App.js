import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client"
//const ENDPOINT = "http://192.168.1.145:4001" //127.0.0.1
//const ENDPOINT = "http://http://172.25.145.136:4001"
const ENDPOINT = "http://localhost:4001"

export const App = () => {
  const [response, setResponse] = useState(""); // {} receive sound file in a useState react ???? 

  //let audio = new Audio() // ta emot från backend på något sätt

 

const playAudio = () => {
  console.log(response)
    let audio = new Audio(response)
    audio.play()

 }
  
 useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    //const socket = io.connect('http://localhost:4001') 
     socket.on("FromAPI", data => {
      console.log(data)
      setResponse(data)
      console.log(response)
      playAudio()
    });
  }, []);

  
  return (
    <>
    <p>
      {/* It's <time dateTime={response}>{response}</time> */}
      Test
    </p>
    <button onClick={playAudio}>button</button> 
    </> //
  );
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