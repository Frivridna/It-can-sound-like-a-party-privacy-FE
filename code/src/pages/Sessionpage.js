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
//  const [ourAudio, setOurAudio] = useState('')

  const socket = useContext(SocketContext)

  useEffect(() => {
    if (room) {
      socket.emit('join', room);
    }
  }, [room, socket])

  useEffect(() => {
    //let audio
    socket.on('join', data => { //users
      console.log('File received', data)
       fetch(TEST_URL(`${data}`))
        .then(res => res.json())
        .then(file => {
          if(data !== "Room is full") {
            console.log(file)
            //if(file !== undefined && file.data !== undefined && file.data.url !== undefined && file.data.url !== '' && !ourAudio)
            if(file?.data?.url !== undefined && file.data.url !== '') { // && !ourAudio
                playAudio(file.data.url)
            //  setOurAudio(file.data.url)
            }
          }
        }) 
        setStatus(data)
    })
  }, [socket])

  // if (audioEnded === false) {
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
//}

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