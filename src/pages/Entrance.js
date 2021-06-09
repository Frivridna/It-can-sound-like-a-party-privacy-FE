import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
import { ENDPOINT } from '../reusable/urls'
const socket = socketIOClient(ENDPOINT)

const Entrance = () => {
  /*const [input, setInput] = useState('')
  
  const value = "1" //hard code value 

  const getR = (num) => {
    return Math.floor(Math.random() * num);
  }

  const testValue =  getR(1000)
  console.log(input)*/ //Nyss utkommenterat

  /*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(100))*/

  /*const onFormSubmit = (e) => {
    e.preventDefault()
    setInput(value)
  }

  useEffect(() => {
    socket.emit('code', input)
    //socket.emit('code', "world"); 
  },[])*/ //Nyss utkommenterat

  useEffect(() => {
    //socket.emit('code', input)
    socket.emit('code', ""); 
  },[])

  return (
    <>
    <div>
        <h1>Welcome</h1>
    </div>
      <Link to={`/createroom`}>
          <button>Create Room</button>
      </Link>
      <Link to={`/joinroom`}>
        <button type="submit">Join Room</button>
      </Link>
    </>
  )
}

export default Entrance

/*
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


*/