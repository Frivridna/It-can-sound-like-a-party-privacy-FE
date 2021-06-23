import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Form from '../components/Form'

const Login = () => {
    const accessToken = useSelector(store => store.credentials.accessToken)
    const error = useSelector(store => store.credentials.error)
    const history = useHistory()
    
    useEffect(() => {
        if(accessToken) {
          history.push('/sounds')
        }
    }, [accessToken, history])

    return (
        <> 
          <Form />
            {error !== null && (error.message === 'User not found') && 
              <div>
                <p className="button-text">The username/password combination was not found. </p> 
                <p className="button-text">Please try again, or sign up if you don't have an account</p>
              </div>
            }
        </>
    )
}

export default Login