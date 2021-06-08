import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
import { ENDPOINT } from '../reusable/urls'
const socket = socketIOClient(ENDPOINT)

const Entrance = () => {
  const [input, setInput] = useState('')
  
  const value = "1"

  useEffect(() => {
    socket.emit("create", input) 
  },[input])

  const onFormSubmit = (e) => {
    e.preventDefault()
    setInput(value)
  }

  return (
    <>
    <div>
        <h1>Welcome</h1>
    </div>
      <Link to={`/createroom`}>
        <form onSubmit={onFormSubmit}>
          <button type="submit" value={value}>Create Room</button>
        </form>
      </Link>
      <Link to={`/joinroom`}>
        <button type="submit">Join Room</button>
      </Link>
    </>
  )
}

export default Entrance