import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

const UserBSession = ({ ENDPOINT }) => {

  const socket = socketIOClient(ENDPOINT)
  const [response, setResponse] = useState("")
  const [secondResponse, setSecondResponse] = useState("")
  

  useEffect(() => {
    const playAudio = (response) => {
      console.log('Play audio: ' + response)
      if (response) {
        let audio = new Audio(response)
        // NEW - to see if it can play with 5 sec of delay
        setTimeout(() => {audio.play(response)}, 4000) 
        //audio.play(response)
      }
    }
    socket.on("FromSecondAPI", response => {
      setResponse(response)
      console.log('From SecondAPI: ',  response)
       //do we need this second setTimeout as well ? 
/*         setTimeout(() => {
           playAudio(response)}, 5000
        ) */
     playAudio(response)
    })
  }, [response])

  //   socket.on("FromSecondAPI", secondResponse => {
  //    setResponse(secondResponse)
  //    console.log('From API: ',  secondResponse)
  //       //setTimeout(() => {
  //        //playAudio(secondResponse)}, 3000
  //      //)
  //    //playAudio(secondResponse)
  //  }) 
  //   // socket.id afteer "FromAPI"

  console.log(response)
  console.log(secondResponse)
  
  return (
    <>
    <h2>User B </h2>
    <h4>Please do not turn on sleep mode on your screen, nor shut the application down, it will disturb your connection to the other user. ❤️</h4>
    <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3>
    </>
  )
}

export default UserBSession