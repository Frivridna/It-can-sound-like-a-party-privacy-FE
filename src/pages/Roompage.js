import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://localhost:4001" // add to reusable folder 
const socket = socketIOClient(ENDPOINT)

const Roompage = () => {
  const [ourCond, setCondition] = useState("")
  // const [value, setValue] = useState("")
  const [room, setRoom] = useState("")

  useEffect(() => {
    const message = room
    //const room = "turtles"
    const socket = socketIOClient(ENDPOINT);
    socket.emit("big-poppa", message, room);
    console.log(socket.id)
  }, []);
  
  
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
      socket.emit('join-room', room)
  }
  
  return (
    <>
    <p>
      Test
    </p>
    <p>I am connected with {socket.id}</p>
    <form onSubmit={onSubmit}>
      <label>
        Group Name:
          <input 
            type="text"
            onChange={e => setRoomName(e)}
            value={room}
          />
      </label>
      <Link to={`/session/${room}`}>
        <button type="submit">Submit group name</button>
      </Link>
    </form> 
    </>
  )
}

export default Roompage