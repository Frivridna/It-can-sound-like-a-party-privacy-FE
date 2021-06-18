import React, { useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
//import socketIOClient from 'socket.io-client'

import { SocketContext } from '../service/socket'
import FinishPage from 'components/FinishPage'

const Sessionpage = () => {
  const { room } = useParams();
  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)

useEffect(() => {
  if (room) {
    socket.emit('join', room);
  }
}, [room, socket])


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
    // GÖr stop audio function  
    // setTimeout(() => {audio.stop(), 501600})
  })
}, [socket])
  
  return (
    <>
{/*     {&& ? <div><h4>Please do not turn on sleep mode on your screen, nor shut the application down, it will disturb your connection to the other user.<span role="img" aria-label="red-heart">❤️</span> </h4>
    <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3>
    <img className="image" src="../assets/Headphones.svg" alt="headphones" /> </div> : <FinishPage /> } */}
    <h4>Please do not turn on sleep mode on your screen, nor shut the application down, it will disturb your connection to the other user.<span role="img" aria-label="red-heart">❤️</span> </h4>
    <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3>
    <img className="image" src="../assets/Headphones.svg" alt="headphones" /> 
    <FinishPage />
    </>
  )
}

export default Sessionpage