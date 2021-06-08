import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://localhost:4001" // add to reusable folder 
const socket = socketIOClient(ENDPOINT)

const Joinroom = () => {
  const [ourCond, setCondition] = useState("")
  // const [value, setValue] = useState("")
  const [room, setRoom] = useState("")

  /*useEffect(() => {
    const test = 1
    
    const message = room
    //const room = "turtles"
    const socket = socketIOClient(ENDPOINT);
    socket.emit("create", test)
    socket.emit("big-poppa", message, room);
    console.log(socket.id)
  }, []);
  */
  
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
  
  /*const onSubmit = (e) => {
      e.preventDefault()
      socket.emit('join-room', room)
  }*/
  
  return (
    <>
    <h3>
      Join Group
    </h3>
    <p>I am connected with {socket.id}</p>
    <form>
      <label>
        Search groupname:
          <input 
            type="text"
            onChange={e => setRoomName(e)}
            value={room}
          />
      </label>
      <Link to={`/session/${room}`}>
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