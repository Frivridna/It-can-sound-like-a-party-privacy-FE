import React from 'react'
import { Link } from 'react-router-dom'
//import { SocketContext } from '../service/socket'

import Entrancecss from '../styles/Entrance.css'
import { Button } from '../styles/GlobalStyles'

const Entrance = () => {
  //const socket = useContext(SocketContext)
  
  return (
    <section className="entrance-container">
      <div>
        <div className="admin-login">
          <div className="login">
              <Link to={`/login`}>
                  <img className="login-image"src="../assets/key.png" alt="key" />
              </Link>
              <p>ADMIN</p>
          </div>
        </div>
        
        <div className="bottom-section">
          <div>
            <div className="buttons">
                <Link to={`/createroom` } >
                  <Button>CREATE ROOM</Button>
                </Link>
            </div>
            <div className="informational-text">
              <p>For the best experience:</p>
              <p>Use your mobile phone</p>
              <p>Wear over ear</p>
              {/* <p>over ear Headphones</p> */}
              <img className="headphone-image" src="../assets/Headphones.svg" alt="headphones" /> 
              <div className="informational-text">
                <p>Listen. Shh.</p>
                <p>Don't look, just listen.</p>
{/*                 <p>ADD Closed eyes clean image here!</p> */}
              </div>
            </div>
            <div className="buttons">
                <Link to={`/joinroom`}>
                    <Button> I HAVE A CODE </Button>
                </Link>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Entrance