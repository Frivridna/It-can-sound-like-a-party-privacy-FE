import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
//import socketIOClient from "socket.io-client"

import { SocketContext } from '../service/socket'
const Joinroom = () => {
  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)

  const [userBInput, setUserBInput] = useState("")
  const [messageFromServer, setMessageFromServer] = useState("")  

  // User B wants to join session with code
  useEffect(() => {
    socket.emit('join-room', userBInput)
  },[userBInput])
  

  const setRoomName = (e) => {
    setUserBInput(e.target.value)
  }
  
  // HOW TO SEND THIS to socket.id >= 2 that tries to enter with the same code??? Ta reda på! :) 
  // Make an extra component that is not this JoinRoom page. That displays the message from server when 3rd person tries to join. That's all we can do right now. 
  // CREATE ERROR COMPONENT POP-UP that displays this message! :) 
  socket.on('status', (messageFromServer) => {
    console.log(messageFromServer) // setError(true)
    setMessageFromServer(messageFromServer)
  })

  const onSubmit = (e) => {
      e.preventDefault()
      setUserBInput(e.target.value)
      socket.emit('join-room', userBInput)
  }
  console.log(userBInput)

  return (
    <>
    <h3>
      Join Group - user B
    </h3>
    <p>I am connected with {socket.id}</p>
    <p>The room is: {messageFromServer}</p>
    <form onSubmit={onSubmit}>
      <label>
        CODE: 
          <input 
            type="text"
            onChange={e => setRoomName(e)}
            value={userBInput}
          />
      </label>
      <Link to={`/session/${userBInput}`}>
        <button type="submit">Submit group name</button>
      </Link>
      <div>
      <Link to={`/`}>
        <button type="submit">Back</button>
      </Link>
      </div>
    </form> 
    </>
  )
}

export default Joinroom