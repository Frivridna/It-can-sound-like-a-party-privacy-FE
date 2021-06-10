import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
const Createroom = ({ ENDPOINT }) => {
  console.log(ENDPOINT)
  const socket = socketIOClient(ENDPOINT)

  const [secretCode, setSecretCode] = useState("")
  const [room, setRoom] = useState("")
  const [userRole, setUserRole] = useState("")
  
  useEffect(() => {
    socket.emit('create', true); 
  },[])

  useEffect(() => {
    socket.on("sendCode", (arg, role) => {
      setSecretCode(arg) // trigger
      setUserRole(role)
    })
    socket.emit('userA', 'Role A')
  }, [secretCode, userRole]) 
  
  console.log(room)
  
  const onSubmit = (e) => {
    e.preventDefault()
    socket.emit('join-room', room)
  }

  return (
    <>
    <h3>
      User A
    </h3>
    <h4>Your role: {userRole}</h4>
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