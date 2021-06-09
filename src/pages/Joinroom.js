import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://localhost:4001" // add to reusable folder 
const socket = socketIOClient(ENDPOINT)

const Joinroom = ({ setSecretCode }) => {
//  const [ourCond, setCondition] = useState("")
  // const [value, setValue] = useState("")
  const [userBInput, setUserBInput] = useState("")
  const [messageFromServer, setMessageFromServer] = useState("")
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
  
  console.log(userBInput)
  
  // User B wants to join session with code
  useEffect(() => {
    socket.on("sendCode", (arg) => {
      setSecretCode(arg) // trigger
    })
    socket.emit('join-room', userBInput) // code 
  },[userBInput])
  
  // ROOMS SECTION ENDS
  
  const setRoomName = (e) => {
  //    setValue(value)
    setUserBInput(e.target.value)
  }
  

  // Make an extra component that is not this JoinRoom page. That displays the message from server when 3rd person tries to join. That's all we can do right now. 
  // CREATE ERROR COMPONENT POP-UP that displays this message! :) 
  socket.on('status', (messageFromServer) => {
    console.log(messageFromServer) // setError(true)
    setMessageFromServer(messageFromServer)
  })

  const onSubmit = (e) => {
      e.preventDefault()
      setUserBInput(e.target.value)
      socket.emit('join-room', userBInput) // code 
  }

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