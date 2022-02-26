import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { SOUND_URL } from '../reusable/urls' 

import { SocketContext } from '../service/socket'

import FinishPage from 'pages/FinishPage'
import Startpage from 'pages/Startpage'
import '../styles/Sessionpage.css'
import { AudioManager } from 'service/AudioManager'

const Sessionpage = () => {
  const socket = useContext(SocketContext)

  const { room } = useParams()
  const [audioEnded, setAudioEnded] = useState(false)
  const [status, setStatus] = useState('') // This is amount of users --> will be used in the future
  
  let newUrl = ""

  let history = useHistory()

  let roomStatus

  useEffect(() => {
    if (room) {
      socket.emit('join', room)
    }
  }, [room, socket])


  useEffect(() => {

    socket.on('join', data => { //users
       fetch(SOUND_URL(`${data}`))
        .then(res => res.json())
        .then(file => {
          console.log(data)
          if(data !== "Room is full") {
            if(file?.data?.url !== undefined && file.data.url !== '' && !newUrl) {
              playAudio(file.data.url)
                newUrl = file.data.url
                console.log(newUrl, "playing")
            } 
          } else {
            //setStatus('Room is full') // --> will be used in the future
            roomStatus = data
            history.push('/')
          }
        })
        //setStatus(data) // --> will be used in the future
    })
  }, [socket, status])


  const playAudio = (url) => {
    if (url !== '') {
      const audio = AudioManager.getAudio();
      if (audio) {
        audio.src = url;
        setTimeout(() => {
          var play_promise = audio.play();
          play_promise.then(function () {
              console.log('playing');
          }).catch(function (reason) {
              window.location.assign(`/rejoinroom/?room=${room}`);
          });
        }, 4000);
        audio.onended = () => {
          console.log('Sound ended')
          setAudioEnded(true)
        }
      }
    }
  }

  return (
    <>
        {(roomStatus === 'Room is full') ? <Startpage status={status}/> :
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
                <h5 className="listening-instructions-text">If anything starts to hurt you are listening too loudly</h5>
                <h5 className="listening-instructions-text">Put your phone to the side, or in a pocket</h5>
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