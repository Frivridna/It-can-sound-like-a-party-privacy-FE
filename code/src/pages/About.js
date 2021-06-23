import React from 'react'

import '../styles/Finishpage.css'
import { Button } from '../styles/GlobalStyles'
import { Link } from 'react-router-dom'

const About = () => {

  return (
  <section className="about-container">
    <div className="abount-content">
      <h1>Franz Edvard Cedrins</h1>
      <h3>
        Creative director, music composer and sound artist specialized in conceptual sound design, 
        augmented reality and audio story telling.
      </h3>
      <h4 className="about-header">
        ABOUT THE AUDIO DEMOS 
      </h4>
      <p className="about-text">
          These are some first audio drafts and tests made out of recordings during May and June 2021.
      </p>
      <p className="about-text">  
        - translated data from skin conductance responses / electrodermal activity and EEG
      </p>
      <p className="about-text">
        - actual microphones recording blood vessels, lungs and the heart and brain etc of a human body 
      </p>
      <p className="about-text">
          Eyelashes and Blood streams recorded with Macro-SpX235
      </p>
      <p className="about-text">
          Lungs and heart recorded with SpX400  
      </p>
      <p className="about-text">
          Stockholm rain recorded with Neumann-head (binaural system) 
      </p>
      <h5 className="bio">BIO</h5>
      <p className="about-text">
          Franz Edvard Cedrins studied fine arts and media at Dramatiska Institutet / SKH in Stockholm and 
          composition at London Royal Academy of Music and has since then presented work at Norrlands Operan 
          (SE) Dramaten / The Royal Dramatic Theatre (SE) BBC (UK) , Sveriges Television (SE), 
          NRK (NO) Bonniers Konsthall (SE) Steirischer Herbst (AU) SSG Los Angeles (US) among other places.
      </p>
      <p className="about-text">
        Franz Evdard is at the moment based in Stockholm Sweden.
      </p>
      <div className="about-button">
        <Link to={`/goodbye`} >
          <Button> <p className="button-text">BACK</p> </Button>
        </Link >
      </div>
    </div>
  </section>
  )
}

export default About