import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"

import Createroom from './Createroom'
import Joinroom from './Joinroom'
const Entrance = ({ ENDPOINT }) => {

  //const ENDPOINT = ENDPOINT
  console.log(ENDPOINT)
  return (
    <>
    <div>
        <h1>Welcome</h1>
    </div>
      <Link to={`/createroom` } >
          <button >Create Room</button>
          
      </Link>

      <Link to={`/joinroom`}>
        <button> Room</button>
      </Link>
    </>
  )
}

export default Entrance