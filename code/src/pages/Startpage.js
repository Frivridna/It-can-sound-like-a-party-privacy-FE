import React from 'react'
import { Link } from 'react-router-dom'

import StartPagecss from '../styles/Startpage.css'
import StatusMessage from '../components/StatusMessage'

const Startpage = ({ status }) => {
  return (
  <>
    {(status === 'Room is full') ? 
    <div>
        <section className="startpage">
            <header className="header">
                <h1 className="header-text">It Can Sound Like a Party, Privacy</h1>
                <h5 className="intro-text">An immmersive artwork for two people</h5>
                    <StatusMessage />
            </header>
            <div className="image-container">
                <img className="startpage-image" src="../assets/blood.jpg" alt="lungs" />
            </div>
            <div className="button-section">
                <Link to={`/entrance` } >
                    <button className="start-button">START</button>
                </Link>
            </div>
        </section>
    </div>
    :
    <section className="startpage">
        <header className="header">
            <h1 className="header-text">It Can Sound Like a Party, Privacy</h1>
            <h5 className="intro-text">An immmersive artwork for two people</h5>
        </header>
        <div className="image-container">
            <img className="startpage-image" src="../assets/blood.jpg" alt="lungs" />
        </div>
        <div className="button-section">
            <Link to={`/entrance` } >
                <button className="start-button">START</button>
            </Link>
        </div>
    </section>
    }
  </>
  )
}

export default Startpage