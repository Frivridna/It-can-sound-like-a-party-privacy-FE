import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"

import Createroom from './Createroom'

const Entrance = ({ ENDPOINT }) => {

  //const ENDPOINT = ENDPOINT
  console.log(ENDPOINT)
  return (
    <>
    <div>
        <h1>Welcome</h1>
    </div>
      <Link to={`/session` } >
          <button >Create Room</button>
          
      </Link>

      <Link to={`/userbsession`}>
        <button> Room</button>
      </Link>
    </>
  )
}

export default Entrance