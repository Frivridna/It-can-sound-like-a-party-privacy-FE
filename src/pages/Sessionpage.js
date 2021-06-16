import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import socketIOClient from 'socket.io-client'

import { SocketContext } from '../service/socket'
const Sessionpage = () => {
  const { room } = useParams();
  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)

useEffect(() => {
  if (room) {
    socket.emit('join', room);
  }
}, [room]);


useEffect(() => {
  socket.on('join', data => {
    console.log('File received', data)
    const playAudio = (data) => {
      if (data) {
        let audio = new Audio(data)
        setTimeout(() => {audio.play(data)}, 4000) 
      }
    }
    playAudio(data)
  })
}, [])
  
  return (
    <>
    <h4>Please do not turn on sleep mode on your screen, nor shut the application down, it will disturb your connection to the other user. ❤️</h4>
    <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3>
    </>
  )
}

export default Sessionpage

/* 
  const [response, setResponse] = useState("")
  const [secondResponse, setSecondResponse] = useState("")
  

  useEffect(() => {
    
    socket.on("FromAPI", response => {
      setResponse(response)
      console.log('From API: ',  response)
     playAudio(response)
    })

    socket.on("FromSecondAPI", secondResponse => {
      setResponse(secondResponse)
        console.log('From API: ',  secondResponse)
      playAudio(secondResponse)
    }) 
  }, [response])

  console.log(response)
  console.log(secondResponse)
*/