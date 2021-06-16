import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
//import socketIOClient from "socket.io-client"

import { SocketContext } from '../service/socket'
const Joinroom = () => {
  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)
  const [existingRoom, setExistingRoom] = useState('');

  const onRoomJoin = () => {
    socket.emit('join', existingRoom);
  }
  return (
    <>
      <input value={existingRoom} onChange={e => setExistingRoom(e.target.value)} />
      <Link to={`/session/${existingRoom}`} >
      <button onClick={onRoomJoin}>Join room</button>
      </Link>
      
    </>
    
  )
}

export default Joinroom