import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AudioManager } from 'service/AudioManager'
import uniqid from 'uniqid'

import '../styles/Createroom.css'
import { Button, HeaderThree, Container } from '../styles/GlobalStyles'

const Createroom = () => {
  const [room, setRoom] = useState('')

  let slicedCode

  const onRoomCreate = () => {
    if (AudioManager.getAudio()) {
      setRoom(uniqid())
    }
  }

  slicedCode = room.slice(4)

  return (
    <Container>
      <section className="big-container"> 
      <HeaderThree>Press to generate room code</HeaderThree>
      <Button onClick={onRoomCreate}><p className="button-text">GENERATE</p></Button>

      {room && <div className="code-placeholder-text">
          <div className="room-code-box">
          <p className="room-code">Tell your friend to type this code:</p>
          </div>
        </div>}


        {room && <div className="code-placeholder">
          <div className="room-code-box">
          <p className="room-code">{slicedCode}</p>
          </div>
        </div>}

      {room &&  
      <div className="enter-world">
        <div className="arrow-down-container">
          <img className="arrow"src="../assets/arrow.png" alt="arrow" />
        </div>
        <Link to={`/session/${slicedCode}`} >
          <Button> <p className="button-text">ENTER THE WORLD </p></Button>
        </Link>
      </div>
      }
      </section>
      <section className="small-container">
        <Link to={`/entrance`} >
          <Button> <p className="button-text">GO BACK</p></Button>
        </Link>
      </section>
    </Container>
  )
}

export default Createroom