import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API_URL } from '../reusable/urls'
import credentials from '../reducers/credentials'
import sounds from '../reducers/sounds'

const Sounds = () => { // -------> RENAME this to Sounds.js and remember to rename it wherever it has been imported ! 
    const [newName, setNewName] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const [newDescription, setNewDescription] = useState('')
    //const [newsoundsList, setNewSoundsList] = useState([])

    const accessToken = useSelector(store => store.credentials.accessToken)
    const username = useSelector(store => store.credentials.username)
    const soundsList = useSelector(store => store.sounds.items)
    console.log(soundsList)

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!accessToken) {
            history.push('/login')
        }
    }, [accessToken, history])

      // dispatch(authenticate( null, null, 'sounds'))
    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                Authorization: accessToken
            }
        }

        fetch(API_URL('sounds'), options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data) { //.success // .status 
                    batch(() => {
                        dispatch(sounds.actions.setSounds(data))
                        dispatch(sounds.actions.setError(null))
                    })
                /* } else {
                    dispatch(sounds.actions.setError(data))
                } */
            })
        }, [accessToken, dispatch])
    
        const onNewNameChange = (e) => {
            setNewName(e.target.value)
        }
        const onNewUrlChange = (e) => { 
            setNewUrl(e.target.value)
        }
        const onNewDescriptionChange = (e) => { 
            setNewDescription(e.target.value)
        }

    // POST new sound
    const onFormSubmit = (e) => {
        e.preventDefault()
        const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: accessToken
        },
        body: JSON.stringify({ name: newName, url: newUrl, description: newDescription})
        }
        fetch(API_URL('sounds'), options)
            .then((res) => res.json())
            .then((data) => {
                // if (data.success) {
                batch(() => {
                    dispatch(sounds.actions.setSounds(data))
                    dispatch(sounds.actions.setError(null))
                })
                /* } else {
                    dispatch(sounds.actions.setError(data))
                } */
            })
            setNewUrl('')
            setNewName('')
            setNewDescription('')
    }

        const onLogOut = () => {
            dispatch(credentials.actions.logOut())
            localStorage.clear()
        }
                        // MAKE SMALL CARDS for the audiofiles that has a button to DELETE THEM ** 
        return (
            <>           
            <h2>Testsida</h2>
            <h3>Welcome {username}</h3>
                <form onSubmit={onFormSubmit}>
                    <label htmlFor="newSound">NAME</label>
                        <textarea
                            id="newSound"
                            type="text"
                            maxLength="200"
                            value={newName}
                            onChange={onNewNameChange}
                            placeholder="Post the title">
                        </textarea>
                        URL
                        <textarea
                            id="newSound"
                            type="text"
                            maxLength="200"
                            value={newUrl}
                            onChange={onNewUrlChange}
                            placeholder="Post the url">
                        </textarea>
                        DESCRIPTION
                        <textarea
                            id="newSound"
                            type="text"
                            maxLength="200"
                            value={newDescription}
                            onChange={onNewDescriptionChange}
                            placeholder="Post the description">
                        </textarea>
                        <button type="submit">Post a new sound</button>
                        </form>
                          {(soundsList.length > 1) && soundsList.map(sound => {
                            return (
                            <div className="thoughts-container" key={sound._id}>
                            <p>{sound.name}</p>
                            <p>{sound.url}</p>
                            <p>{sound.description}</p>
                            </div>
                            )
                        })}
                        <button
                            type='button'
                            onClick={onLogOut}
                        >
                        Log out
                        </button>
            </>
        )
    }

export default Sounds