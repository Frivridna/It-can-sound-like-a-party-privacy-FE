import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import credentials, { authenticate } from '../reducers/credentials'

const Test = () => {

    //const name = useSelector(store => store.credentials.username)
    const accessToken = useSelector(store => store.credentials.accessToken)
    //const secret = useSelector(store => store.credentials.secret)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if(!accessToken) {
            history.push('/login')
        }
    }, [accessToken, history])

    const onLogOut = () => {
        dispatch(credentials.actions.logOut())
        localStorage.clear()
    }
    
    dispatch(authenticate( null, null, 'sounds'))

    return (
        <> 
        <h2>Testsida</h2>
            <button
                type='button'
                onClick={onLogOut}
            >
                Log out
            </button>
        </>
    )
}

export default Test