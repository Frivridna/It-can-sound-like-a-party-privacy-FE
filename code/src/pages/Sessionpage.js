import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { SOUND_URL } from '../reusable/urls'

import { SocketContext } from '../service/socket'

import FinishPage from 'pages/FinishPage'
import Startpage from 'pages/Startpage'
import '../styles/Sessionpage.css'

const Sessionpage = () => {
  const socket = useContext(SocketContext)

  const { room } = useParams()
  const [audioEnded, setAudioEnded] = useState(false)
  const [status, setStatus] = useState(null) // amount of users --> not being set inside of useEffect line 41
  // const [ourAudio, setOurAudio] = useState('')
 
  let ourAudioNew = ""

  useEffect(() => {
    if (room) {
      socket.emit('join', room)
    }
  }, [room, socket])

  useEffect(() => {
    socket.on('join', data => { //users
      console.log('File received', data)
       fetch(SOUND_URL(`${data}`))
        .then(res => res.json())
        .then(file => {
          if(data !== "Room is full") {
            console.log(file)
            //if(file !== undefined && file.data !== undefined && file.data.url !== undefined && file.data.url !== '' && !ourAudio)
            if(file?.data?.url !== undefined && file.data.url !== '' && !ourAudioNew ) { // && !ourAudio
              playAudio(file.data.url)
                ourAudioNew = file.data.url
                console.log(ourAudioNew, "playing")
            }
          }
        }) 
        setStatus(data)
        console.log(status)
    })
  }, [socket, status]) //socket

  const playAudio = (url) => {
    if (url !== '') {
      let audio = new Audio(url)
      setTimeout(() => {audio.play()}, 4000) 

      audio.onended = () => {
        console.log('Sound ended')
        setAudioEnded(true)
      }
    }
  }

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