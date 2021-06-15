import React, { useState, useEffect, useContext } from 'react' // added useContext here 
import { Link } from 'react-router-dom'
//import socketIOClient from "socket.io-client"
import { SocketContext } from '../service/socket'

import Createroom from './Createroom'
import Joinroom from './Joinroom'
const Entrance = () => { //deleted ENDPOINT 
  const socket = useContext(SocketContext)
  
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
      <div>
      <Link to={`/login`}>
        <button> Admin login</button>
      </Link>
      </div>
    </>
  )
}

export default Entrance