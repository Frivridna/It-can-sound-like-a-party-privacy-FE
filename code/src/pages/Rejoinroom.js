import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AudioManager } from 'service/AudioManager'
import { SocketContext } from '../service/socket'

import { Button } from '../styles/GlobalStyles'
import '../styles/Joinroom.css'

const Rejoinroom = () => {
  const socket = useContext(SocketContext)
  const [roomCode] = useState('')

  const onRoomReJoin = () => {
    if (AudioManager.getAudio()) {
      socket.emit('join', roomCode) 
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  let room = '';
  if(urlParams.has('room')) {
    room = urlParams.get('room');
  }

  if (!room) {
    return (
      <section className="join-room-container">
        <div className="user-input">
          <Link to={`/entrance`} >
          <Button><p className="button-text">GO BACK</p></Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="join-room-container">
      <div className="user-input">
        Room: {room}
        <Link to={`/session/${room}`}>
          <Button onClick={onRoomReJoin}><p className="button-text">RE-JOIN ROOM</p></Button> 
        </Link>
        
        <Link to={`/entrance`} >
          <Button><p className="button-text">GO BACK</p></Button>
        </Link>
      </div>
    </section>
  )
}

export default Rejoinroom