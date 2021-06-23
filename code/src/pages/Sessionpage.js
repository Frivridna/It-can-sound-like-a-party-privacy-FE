//URL received but ourAudio is undefined: 

import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { TEST_URL } from '../reusable/urls'

import { SocketContext } from '../service/socket'

import FinishPage from 'pages/FinishPage'
import Startpage from 'pages/Startpage'
import '../styles/Sessionpage.css'

const Sessionpage = () => {
  const { room } = useParams()
  const [audioEnded, setAudioEnded] = useState(false)
  const [status, setStatus] = useState('')
  const [ourAudio, setOurAudio] = useState('')

  const socket = useContext(SocketContext)

  useEffect(() => {
    if (room) {
      socket.emit('join', room);
    }
  }, [room, socket])

  const newSomething = () => {
    let audio
    const playAudio = (url) => { //data
      if (url) {
        audio = new Audio(url)
//        setTimeout(() => {audio.play(url)}, 4000)
        audio.play(url)
        audio.onended = () => {
          console.log('Sound ended')
          setAudioEnded(true)
        }
      }
    }

    setTimeout(() => { 
      console.log('Should play audio: ' + ourAudio)
      playAudio(ourAudio)}, 4000)
  }

  useEffect(() => {
    socket.on('join', data => { //users
      console.log('File received', data)
       fetch(TEST_URL(`${data}`))
        .then(res => res.json())
        .then(file => {
          console.log(file.data.url)
          setOurAudio(file.data.url)
          newSomething()
        }) 
      setStatus(data)
    })
  }, [socket])

  return (
    <>
        {(status === 'Room is full') ? <Startpage status={status}/> : 
        <div>
          {(audioEnded) ? 
            <div>
              <FinishPage />
            </div> : 
            <div className="hero-image-container">
              <img className="hero-image" src="../assets/blood.jpg" alt="lungs" />
              <section className="listening-instructions-container">
              <img className="closed-eye-image" src="../assets/closed-eye.png" alt="closed eyes" />
                <h5 className="listening-instructions-text">Your headphones should be just loud enough to clearly hear both tones,</h5>
                <h5 className="listening-instructions-text">If anything starts to hurt you are listening to loudly</h5>
                <h5 className="listening-instructions-text">Close your eyes, and put your phone to the side, or in a pocket</h5>
                <h5 className="listening-instructions-text">Please do not shut down your browser, the sound will stop</h5>
  {/*         <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3> */}  
                <div className="closed-eye-container">
                  <img className="closed-eye-image" src="../assets/closed-eye.png" alt="closed eyes" />
                </div>
            </section>
            </div>
            }
        </div>
        }
    </>
  )
}

export default Sessionpage