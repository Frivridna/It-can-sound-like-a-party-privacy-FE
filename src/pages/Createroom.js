import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid';

//import { SocketContext } from '../service/socket'
//import socketIOClient from 'socket.io-client'
const Createroom = () => {
  const [room, setRoom] = useState('')

  const onRoomCreate = () => {
    setRoom(uniqid())
  }
  
  return (
    <>
      <h3>Press to generate room code</h3>
      <p>{room}</p>
      <button onClick={onRoomCreate}>Generate</button>
      <Link to={`/session/${room}`} >
        <button>Enter the world</button>
      </Link>
    </>
  )
}

export default Createroom