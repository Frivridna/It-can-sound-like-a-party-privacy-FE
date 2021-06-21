import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API_URL, DELETE_URL } from '../reusable/urls'
import credentials from '../reducers/credentials'
import sounds from '../reducers/sounds'
import '../styles/Sounds.css'
import { Button } from '../styles/GlobalStyles'

const Sounds = () => {
    const [newName, setNewName] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const [newDescription, setNewDescription] = useState('')

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

    // DELETE SOUND
    const onDeleteSound = (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken
            }
        }
        fetch(DELETE_URL(id), options)
            .then(res => res.json())
            .then(deletedSound => {
                const updatedSoundsList = soundsList.filter((item) => item._id !== deletedSound._id)
                dispatch(sounds.actions.setSounds(updatedSoundsList))
                dispatch(sounds.actions.setError(null))
            })
    }

        const onLogOut = () => {
            dispatch(credentials.actions.logOut())
            localStorage.clear()
        }
                        // MAKE SMALL CARDS for the audiofiles that has a button to DELETE THEM ** 
        return (
            <>           
                <section className="sound-input-container">
<div>
<h2 className="text-label">Testsida</h2>
            <h3 className="text-label">Welcome {username}</h3>
                <form onSubmit={onFormSubmit}>
                    <div>
                    <div>
                    <label className="text-label" htmlFor="newSound">NAME</label>
                    </div>
                        <div className="input-field">
                        <input
                            className="sound-input"
                            type="text"
    
                            value={newName}
                            onChange={onNewNameChange}
                            placeholder="Post the title" />

                        </div>
                    </div>

                        <div>
                        <label className="text-label">URL</label>
                        <div className="input-field">
                            <input
                            //id="newSound"
                            className="sound-input"
                            type="text"
                            value={newUrl}
                            onChange={onNewUrlChange}
                            placeholder="Post the URL" />
                        </div>

                        </div>
                        <div>
                            <label className="text-label">DESCRIPTION</label>
                        <div>
                        <textarea 
                                className="description"
                                resize="none"
                                maxLength="150"
                                id="newSound"
                                type="text"
                                value={newDescription}
                                onChange={onNewDescriptionChange}
                                placeholder="Post the description">
                            </textarea>
                        </div>

                        </div>


                        <Button type="submit">Post a new sound</Button>
                        </form>
</div>

                </section>



                          {(soundsList.length > 1) && soundsList.map(sound => {
                            return (
                            <div className="sound-container" key={sound._id}>
                                <div className="sound-delete-container">
                                    <p>{sound.name}</p>
                                    <p>{sound.url}</p>
                                    <p>{sound.description}</p>
                                    <button 
                                        tabIndex='0'
                                        aria-pressed='false'
                                        aria-label='Remove a sound'
                                        className='delete-button'
                                        onClick={() => onDeleteSound(sound._id)}>Delete x</button>
                                </div>
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



/*

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
                            className="description"
                            resize="none"
                            maxLength="150"
                            id="newSound"
                            type="text"
                            value={newDescription}
                            onChange={onNewDescriptionChange}
                            placeholder="Post the description">
                        </textarea>
                        <button type="submit">Post a new sound</button>
                        </form>
                          {(soundsList.length > 1) && soundsList.map(sound => {
                            return (
                            <div className="sound-container" key={sound._id}>
                                <div className="sound-delete-container">
                                    <p>{sound.name}</p>
                                    <p>{sound.url}</p>
                                    <p>{sound.description}</p>
                                    <button 
                                        tabIndex='0'
                                        aria-pressed='false'
                                        aria-label='Remove a sound'
                                        className='delete-button'
                                        onClick={() => onDeleteSound(sound._id)}>Delete x</button>
                                </div>
                            </div>
                            )
                        })}
                        <button
                            type='button'
                            onClick={onLogOut}
                        >
                        Log out
                        </button>



*/