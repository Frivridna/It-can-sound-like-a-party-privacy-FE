import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//import socketIOClient from "socket.io-client"

import { SocketContext } from '../service/socket'
import Createroom from './Createroom'
import Joinroom from './Joinroom'

const Login = () => {
  const socket = useContext(SocketContext)

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const onUsernameChange = (event) => {
      setUsername(event.target.value)
      console.log(username)
    }
  
    const onPasswordChange = (event) => {
      setPassword(event.target.value)
      console.log(password)
    }
  
    const onFormSubmit = (event) => {
      event.preventDefault()
      //dispatch(authenticate(username, password))
    }




  //const ENDPOINT = ENDPOINT
  //console.log(ENDPOINT)
  return (
    <>
        <h1>Test Login</h1>

        <section className="container">
      <form className="form" onSubmit={onFormSubmit}>
        <div>
          <label>Username</label>
          <div className="input-field">
            <input type='text' value={username} onChange={onUsernameChange} />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className="input-field">
            <input type='password' value={password} onChange={onPasswordChange} />
          </div>
        </div>
        <div className="signin">
          <button 
            text='Sign in'
            type='submit'
          />
        </div>

      </form>

    </section>

        <div>
        <Link to={`/`}>
          <button type="submit">Back</button>
        </Link>
        </div>
    </>
  )
}

export default Login