import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Createroomcss from '../styles/Createroom.css'
import { Button, HeaderThree, Container } from '../styles/GlobalStyles'
//import { SocketContext } from '../service/socket'
//import socketIOClient from 'socket.io-client'




const Createroom = () => {
 
  const [room, setRoom] = useState('')

  const onRoomCreate = () => {
    setRoom(uniqid())
  }
  
  return (
    <Container>
      <section className="big-container"> 
      <HeaderThree>Press to generate room code</HeaderThree>
      <Button onClick={onRoomCreate}>GENERATE</Button>

        <div className="code-placeholder">
          <div className="room-code-box">
          <p className="room-code">{room}</p>
          </div>
        </div>

      <Link to={`/session/${room}`} >
        <Button>ENTER THE WORLD</Button>
      </Link>
      </section>
      <section className="small-container">
        <Link to={`/entrance`} >
          <Button>GO BACK</Button>
        </Link>
      </section>
    </Container>
  )
}

export default Createroom