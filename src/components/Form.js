import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, batch } from 'react-redux'

import { API_URL } from '../reusable/urls'
import credentials from '../reducers/credentials' // , { authenticate } 
import Login from '../styles/Login.css'
import { Button} from '../styles/GlobalStyles'

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [mode, setMode] = useState(null) // ? THIS IS A QUESTION ! 
  
  const dispatch = useDispatch()
  
  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  // INSIDE OF onFormSubmit earlier: 
  //     dispatch(authenticate(username, password, mode))
  //  console.log("test")
  const onFormSubmit = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }

    fetch(API_URL(mode), options) // signin / login OOOOOOR mode here? 
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(credentials.actions.setUsername(data.username))
            dispatch(credentials.actions.setAccessToken(data.accessToken))
            dispatch(credentials.actions.setError(null))
            localStorage.setItem('credentials', JSON.stringify({
              username: data.username,
              accessToken: data.accessToken
            }))
          })
        } else {
          dispatch(credentials.actions.setError(data))
        }
      })
      .catch((error) => {
        dispatch(credentials.actions.setError(error))
      })
  }

  return (
    <section className="form-section">
      <form onSubmit={onFormSubmit} className="form">

        <div className="input-container">
        <div className="input-box">
          <label className="label-text">Username</label>
          <div className="user-input">
            <input 
              className="room-code-input"
              type='text'
              value={username} 
              onChange={onUsernameChange} 
              placeholder="Username"
            />
          </div>
        </div>
        </div>

        <div className="input-container"> 
        <div className="input-box">
          <label className="label-text">Password</label>
          <div className="user-input">
            <input 
            className="room-code-input"
              type='password' 
              value={password} 
              onChange={onPasswordChange} 
              placeholder="Password"
            />
          </div>
        </div>
        </div>


        <div>
          <Button
            type='submit'
            onClick={() => setMode('signin')}
          >Sign in
          </Button>
        </div>
        <Link to={`/entrance`} >
            <Button>Back</Button>
        </Link>
      </form>

    </section>
  )
}

export default Form






/*

<section >
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Username</label>
          <div >

            
            <input 
              type='text'
              value={username} 
              onChange={onUsernameChange} 
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input 
              type='password' 
              value={password} 
              onChange={onPasswordChange} 
            />
          </div>
        </div>
        <div>
          <button
            type='submit'
            onClick={() => setMode('signin')}
          >Sign in
          </button>
        </div>
      </form>

    </section>


*/