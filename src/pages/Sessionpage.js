import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client"
import { ENDPOINT } from '../reusable/urls'
const socket = socketIOClient(ENDPOINT)

const Sessionpage = () => {
  const [response, setResponse] = useState("")

  useEffect(() => {
    const playAudio = (response) => {
      console.log('Play audio: ' + response)
      if (response) {
      let audio = new Audio(response)
      audio.play(response)
      }
    }

    //const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", response => {
      setResponse(response)
      console.log('From API: ', + response)
      playAudio(response)
    })
  
    /*socket.on("FromAPI", response => {
      setResponse(response)
      console.log('From API: ', + response)
      playAudio(response)
    })*/

  }, [response])

  const sendSocketClick = () => {
    console.log('Sends a click')
    socket.emit('click', true)
  }
  
  return (
    <>
    <button onClick={() => sendSocketClick()}>button</button> 
    </>
  )
}

export default Sessionpage