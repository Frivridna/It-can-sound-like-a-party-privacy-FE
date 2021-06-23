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
    const [newPlayable, setNewPlayable] = useState(false)

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
                console.log('sounds GET', data)
                if (data.success) {
                    batch(() => {
                        dispatch(sounds.actions.setSounds(data.data))
                        dispatch(sounds.actions.setError(null))
                    })
                 } else {
                    dispatch(sounds.actions.setError(data.error))
                }
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

        const onPlayableChange = () => {
            setNewPlayable(!newPlayable)
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
                body: JSON.stringify({ name: newName, url: newUrl, description: newDescription, playable: newPlayable })
            }
            fetch(API_URL('sounds'), options)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        batch(() => {
                            dispatch(sounds.actions.setSounds(data.data))
                            dispatch(sounds.actions.setError(null))
                        })
                    } else {
                        dispatch(sounds.actions.setError(data.error))
                    }
                })
                window.location.reload()
        }

        // DELETE A SOUND
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


        return (
            <>           
                <section className="sound-input-container">
                    <div>
                        <div >
                            <h2 className="text-label">ADMIN PAGE</h2>
                        </div>
                        <div>
                            <h3 className="text-label">Welcome {username}</h3>
                        </div>
                        <form onSubmit={onFormSubmit}>
                            <div className="name-input-section">
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
                            <div className="name-input-section">
                                <label className="text-label">URL</label>
                                <div className="input-field">
                                    <input
                                    className="sound-input"
                                    type="text"
                                    value={newUrl}
                                    onChange={onNewUrlChange}
                                    placeholder="Post the URL" />
                                </div>
                            </div>
                            <div >
                                <label className="text-label">DESCRIPTION</label>
                                <div>
                                    <textarea 
                                        className="description"
                                        resize="none"
                                        maxLength="150"
                                        type="text"
                                        value={newDescription}
                                        onChange={onNewDescriptionChange}
                                        placeholder="Post the description">
                                    </textarea>
                                </div>
                            </div>
                            <div>
                                <label 
                                    className="text-label"
                                >
                                        Playable?
                                </label>
                                <div>
                                <input 
                                    value={newPlayable} 
                                    type="checkbox" 
                                    defaultChecked={newPlayable} 
                                    onChange={onPlayableChange}
                                />
                                </div>
                            </div>
                            <Button type="submit">Post a new sound</Button>
                        </form>
                    </div>
                    </section>
                {(soundsList.length > 1) && soundsList.map(sound => {
                return (
                    <div className="file-container" key={sound._id}>
                        <div className="card-container">
                            <div className="card-content">
                                <h4 className="card-title">Title: {sound.name}</h4>
                                <p className="card-children">Url: {sound.url}</p>
                                <p className="card-children">Description: {sound.description}</p>
                                <p className="card-children">Playable: {(newPlayable) ? "V" : "X"}</p>
                            </div>
                            <div className="delete-button-container">
                                <button 
                                    tabIndex='0'
                                    aria-label='Remove a sound'
                                    className='delete-button'
                                    onClick={() => onDeleteSound(sound._id)}>DELETE
                                </button>
                            </div>
                        </div>    
                    </div>
                )
                })}
                <div className="logout-button">
                    <Button
                        type='button'
                        onClick={onLogOut}
                    >
                        Log out
                    </Button>
                </div>
            </>
        )
}

export default Sounds