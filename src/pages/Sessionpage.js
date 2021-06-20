import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
//import socketIOClient from 'socket.io-client'

import { SocketContext } from '../service/socket'
import FinishPage from 'components/FinishPage'
import Startpage from 'pages/Startpage'
import Sessionpagecss from '../styles/Sessionpage.css'

const Sessionpage = () => {
  const { room } = useParams()
  const [audioEnded, setAudioEnded] = useState(false)
  const [status, setStatus] = useState('')
  //const socket = socketIOClient(ENDPOINT)
  const socket = useContext(SocketContext)

  useEffect(() => {
    if (room) {
      socket.emit('join', room);
    }
  }, [room, socket])

  let audio 

  useEffect(() => {
    socket.on('join', data => {
      console.log('File received', data)
      setStatus(data)
      const playAudio = (data) => {
        if (data) {
          audio = new Audio(data)
          setTimeout(() => {audio.play(data)}, 4000) 
        }
      }
      playAudio(data)
      audio.onended = (data) => {
        console.log('Sound ended')
        setAudioEnded(true)
      }
    })
  }, [socket])
  
// old version ! ---> Check the return! :) aka Clean up the useEffect. 

/*
export const App = () => {
  const [response, setResponse] = useState(""); // {} receive sound file in a useState react ???? 

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    //const socket = io.connect('http://localhost:4001') 
    socket.on("FromAPI", data => {
      setResponse(data)
    });
    // Clean up the effect
    return () => socket.disconnect();
  }, []);

  return (
    <p>
    </p>
  );
}
*/
  return (
    <>
        {(status === 'Room is full') ? <Startpage status={status}/> : 
        <div>
          {(audioEnded) ? 
            <div>
              <h2>Sound ended aka --> <FinishPage /></h2>
            </div> : 
            <div className="listening-instructions-container">
                <img className="image" src="../assets/Headphones.svg" alt="headphones" />
                <h5 className="listening-instructions-text">Your headphones should be just loud enough to clearly hear both tones,</h5>
                <h5 className="listening-instructions-text">If anything starts to hurt you are listening to loudly<span role="img" aria-label="red-heart">❤️</span></h5>
                <h5 className="listening-instructions-text">Close your eyes, and put your phone to the side, or in a pocket</h5>
                <h5 className="listening-instructions-text">Please do not shut down your browser, the sound will stop</h5>
  {/*         <h3>Note to C and F: Add a loading spinner if sleep mode goes on + Franz out-of-synch ljudfil ska då spelas</h3> */}
                <div className="image-container-sessionpage">
                  <img className="sessionpage-image" src="../assets/blood.jpg" alt="lungs" />
                </div>
            </div>
            }
        </div>
        }
    </>
  )
}

export default Sessionpage