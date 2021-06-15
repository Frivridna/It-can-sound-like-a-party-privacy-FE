import React, { useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'

import { SocketContext } from '../service/socket'
//import socketIOClient from 'socket.io-client'
const Createroom = () => {
  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)

  const [secretCode, setSecretCode] = useState("")
  const [userAinput, setUserAinput] = useState("")
  
  useEffect(() => {
    socket.emit('create', true);
  },[])

  socket.on("sendCode", (arg) => {
    setSecretCode(arg) 
    setUserAinput(arg)
  })

  const onSubmit = (e) => {
    e.preventDefault()
    socket.emit('join-room', userAinput)
    console.log(userAinput)
  }

  return (
    <>
    <h3>
      User A
    </h3>
      <p>CODE: {secretCode}</p>
      <form 
        onSubmit={onSubmit}
        value={secretCode}
      >
        <Link to={`/session/${secretCode}`} >
          <button type="submit">ENTER THE WORLD</button>
        </Link>
      </form>
      <div>
        <Link to={`/`}>
          <button type="submit">Back</button>
        </Link>
      </div> 
    </>
  )
}

export default Createroom