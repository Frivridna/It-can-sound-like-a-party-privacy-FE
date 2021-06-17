import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import credentials, { authenticate } from '../reducers/credentials'

const Test = () => {
    const [myAudio, setAudio] = useState([])

    //const name = useSelector(store => store.credentials.username)
    const accessToken = useSelector(store => store.credentials.accessToken)
    const username = useSelector(store => store.credentials.username)


    useEffect(()=> {
        fetch("http://localhost:4001/sounds")
        .then(res => res.json())
        .then(data => setAudio(data))
    }, [])

      console.log(myAudio)


    //console.log(audio)
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
        <h3>Welcome {username}</h3>
        <div>

        </div>
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