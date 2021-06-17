import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../reducers/credentials'


const Form = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState(null)

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
    dispatch(authenticate(username, password, mode))
    console.log("test")
  }

  return (
    <section >
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Username</label>
          <div >
            <input type='text' value={username} onChange={onUsernameChange} />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type='password' value={password} onChange={onPasswordChange} />
          </div>
        </div>
        <div>

          <button
          type='submit'
          onClick={() => setMode('signin')}
          >Sign in</button>
        </div>
      </form>

    </section>
  )
}

export default Form