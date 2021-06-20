import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
//import socketIOClient from "socket.io-client"
import { SocketContext } from '../service/socket'

import { Button } from '../styles/GlobalStyles'
import Joinroomcss from '../styles/Joinroom.css'
import StatusMessage from '../components/StatusMessage'

const Joinroom = () => {
  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)
  const [existingRoom, setExistingRoom] = useState('')

  const onRoomJoin = () => {
    socket.emit('join', existingRoom) 
  }

  return (
    <section className="join-room-container">
      <div className="user-input">
        <input 
          className="room-code-input" 
          value={existingRoom} 
          onChange={e => setExistingRoom(e.target.value)} 
          placeholder="Write your code here"
        />
        <Link to={`/session/${existingRoom}`} >
        <Button onClick={onRoomJoin}>JOIN ROOM</Button>
        </Link>
        <Link to={`/entrance`} >
        <Button>GO BACK</Button>
        </Link>
      </div>
    </section>
  )
}

export default Joinroom