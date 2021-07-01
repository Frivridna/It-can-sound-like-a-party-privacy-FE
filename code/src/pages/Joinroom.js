import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { SocketContext } from '../service/socket'

import { Button } from '../styles/GlobalStyles'
import '../styles/Joinroom.css'

const Joinroom = () => {
  const socket = useContext(SocketContext)
  const [roomCode, setRoomCode] = useState('')

  const onRoomJoin = () => {
     socket.emit('join', roomCode) 
  }

  return (
    <section className="join-room-container">
      <div className="user-input">
        <input 
          className="room-code-input" 
          value={roomCode} 
          onChange={e => setRoomCode(e.target.value)} 
          placeholder="Write code here"
        />
        {(roomCode.length < 1) ? 
        <Button disabled><p className="disabled-button">ENTER CODE</p></Button>
        :         
          <Link to={`/session/${roomCode}`} >
          <Button onClick={onRoomJoin}><p className="button-text">JOIN ROOM</p></Button> 
          </Link>
        }
        <Link to={`/entrance`} >
        <Button><p className="button-text">GO BACK</p></Button>
        </Link>
      </div>
    </section>
  )
}

export default Joinroom