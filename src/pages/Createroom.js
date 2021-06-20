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

      {room && <div className="code-placeholder-text">
          <div className="room-code-box">
          <p className="room-code">Tell your friend to type this code:</p>
          </div>
        </div>}


        {room && <div className="code-placeholder">
          <div className="room-code-box">
          <p className="room-code">{room}</p>
          </div>
        </div>}

      {room &&  
      <div className="enter-world">
        <img className="arrow"src="../assets/arrow.png" alt="arrow" />   
        <Link to={`/session/${room}`} >
          <Button>ENTER THE WORLD</Button>
        </Link>
      </div>
      }
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