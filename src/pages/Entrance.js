import React from 'react'
import { Link } from 'react-router-dom'
//import { SocketContext } from '../service/socket'

//import Createroom from './Createroom'
//import Joinroom from './Joinroom'
const Entrance = () => {
  //const socket = useContext(SocketContext)
  
  return (
    <>
      <div>
        <h1>Welcome</h1>
      </div>
      <Link to={`/createroom` } >
        <button >CREATE ROOM</button>
      </Link>
      <Link to={`/joinroom`}>
        <button> I HAVE A CODE </button>
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