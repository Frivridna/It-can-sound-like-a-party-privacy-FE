import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
//import socketIOClient from 'socket.io-client'

import { SocketContext } from '../service/socket'
import FinishPage from 'components/FinishPage'

const Sessionpage = () => {
  const { room } = useParams();
  const [audioEnded, setAudioEnded] = useState(false)

  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)

useEffect(() => {
  if (room) {
    socket.emit('join', room);
  }
}, [room, socket])

let audio 

useEffect(() => {
  socket.on('join', data => {
    console.log('File received', data)
    const playAudio = (data) => {
      if (data) {
        audio = new Audio(data)
        setTimeout(() => {audio.play(data)}, 4000) 
      }
    }
    playAudio(data)
    audio.onended = (data) => {
      console.log('Sound ended')
      setAudioEnded(true)
    }
  })
}, [socket])
  
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
  return (
    <>
    {(audioEnded) ? <div><h2>Sound ended</h2></div>: <div><h4>Please do not turn on sleep mode on your screen, nor shut the application down, it will disturb your connection to the other user.<span role="img" aria-label="red-heart">❤️</span> </h4>
    <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3>
    <img className="image" src="../assets/Headphones.svg" alt="headphones" /></div>}

    <FinishPage />
    </>
  )
}

export default Sessionpage