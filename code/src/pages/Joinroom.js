import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { SocketContext } from '../service/socket'

import { Button } from '../styles/GlobalStyles'
import '../styles/Joinroom.css'

const Joinroom = () => {
  const socket = useContext(SocketContext)
  const [existingRoom, setExistingRoom] = useState('')

  const onRoomJoin = () => {
    socket.emit('join', existingRoom) 
  }

  console.log(existingRoom.length)

  return (
    <section className="join-room-container">
      <div className="user-input">
        <input 
          className="room-code-input" 
          value={existingRoom} 
          onChange={e => setExistingRoom(e.target.value)} 
          placeholder="Write your code here"
        />
        {(existingRoom.length < 1) ? 
        <Button  disabled><p className="disabled-button">ENTER CODE</p></Button>
        :         
          <Link to={`/session/${existingRoom}`} >
          <Button onClick={onRoomJoin}>JOIN ROOM</Button>
          </Link>
        }
        <Link to={`/entrance`} >
        <Button>GO BACK</Button>
        </Link>
      </div>
    </section>
  )
}

export default Joinroom