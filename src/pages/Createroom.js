import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
import { ENDPOINT } from '../reusable/urls'
//const { ENDPOINT } = "http://localhost:4001" // add to reusable folder 
const socket = socketIOClient(ENDPOINT) // Test

const Createroom = () => {
  const [ourCond, setCondition] = useState("")
  // const [value, setValue] = useState("")
  const [room, setRoom] = useState("")

  
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
  
  
  // ROOMS SECTION ENDS
  
  const setRoomName = (e) => {
  //    setValue(value)
    setRoom(e.target.value)
  }
  
  const onSubmit = (e) => {
      e.preventDefault()
      //socket.emit('join-room', room)
  }
  
  return (
    <>
    <h3>
      User A
    </h3>
    <p>Here is your groupname ${}</p>


      <div>
        <Link to={`/`}>
        <button type="submit">Back</button>
        </Link>
      </div>

    </>
  )
}

export default Createroom