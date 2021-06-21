import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'

import '../styles/Createroom.css'
import { Button, HeaderThree, Container } from '../styles/GlobalStyles'

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
        <div className="arrow-down-container">
          <img className="arrow"src="../assets/arrow.png" alt="arrow" />
        </div>
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