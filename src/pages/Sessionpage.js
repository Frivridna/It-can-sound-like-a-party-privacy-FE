import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client"

const Sessionpage = ({ ENDPOINT }) => {

  const socket = socketIOClient(ENDPOINT)
  const [response, setResponse] = useState("")

  useEffect(() => {
    const playAudio = (response) => {
      console.log('Play audio: ' + response)
      if (response) {
      let audio = new Audio(response)
      // NEW - to see if it can be a delay in playing the audio. 
        setTimeout(() => {audio.play(response)}, 5000) 
      }
    }   // setTimeout(() => { setLoad(false)},3000)

    socket.on("FromAPI", response => {
      setResponse(response)
      console.log('From API: ',  response)
        setTimeout(() => {
          playAudio(response)}, 5000
        )  
      playAudio(response)
    })
  }, [response])

  const sendSocketClick = () => {
    console.log('Sends a click')
    socket.emit('click', true)
  }
  
  return (
    <>
    <h4>Please do not turn on sleep mode on your screen, nor shut the application down, it will disturb your connection to the other user. ❤️</h4>
    <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3>
    </>
  )
}

export default Sessionpage