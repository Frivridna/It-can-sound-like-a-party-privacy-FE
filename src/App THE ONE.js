import React, { useState, useEffect } from 'react'
import io from 'socket.io-client' // new 6june
//import socketIOClient from "socket.io-client"

const ENDPOINT = "http://localhost:4001" // add to reusable folder 

//const socket = socketIOClient(ENDPOINT)
const socket = io.connect(ENDPOINT)

export const App = () => {
  const [response, setResponse] = useState("")

  const playAudio = (response) => {
    console.log('Play audio: ' + response)
    if (response) {
    let audio = new Audio(response)
    audio.play(response)
    }
  }
  
  useEffect(() => {
    const socket = io.connect(ENDPOINT) // new 6june
    socket.on("FromAPI", response => {
      setResponse(response)
      console.log('From API: ', + response)
      playAudio(response)
    });
  }, [playAudio, response]);

  const sendSocketClick = () => {
    console.log('Sends a click')
    socket.emit('click', true)
  }
  
  return (
    <>
    <p>
      Test
    </p>
    <button onClick={() => sendSocketClick()}>button</button> 
    </>
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