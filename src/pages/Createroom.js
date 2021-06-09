import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
import { ENDPOINT } from '../reusable/urls'
const socket = socketIOClient(ENDPOINT)

const Createroom = () => {
  const [secretCode, setSecretCode] = useState("")
  // const [value, setValue] = useState("")
  const [room, setRoom] = useState("")
  
  useEffect(() => {
    //socket.emit('code', input)
    socket.emit('create', true); 
  },[])

  useEffect(() => {
    socket.on("sendCode", (arg) => {
      setSecretCode(arg) // trigger
    })
    // socket.emit('create', true)
  }, [secretCode]) 
  //console.log(secretCode)

  /*useEffect(() => {
    const test = 0
    
    const message = room
    //const room = "turtles"
    //const socket = socketIOClient(ENDPOINT); test
    
    socket.emit("big-poppa", message, room);
    console.log(socket.id)
  }, []);*/


   /*useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("conditional", (arg) => {
      setCondition(arg); // trigger
    });
  }, [ourCond]); 
  
  console.log(ourCond)*/
  
  console.log(room)
  
  const onSubmit = (e) => {
    e.preventDefault()
    //socket.emit('join-room', room)
    socket.emit('join-room', room)
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