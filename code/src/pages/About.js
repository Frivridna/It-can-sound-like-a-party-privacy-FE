import React from 'react'

import '../styles/Finishpage.css'
import { Button } from '../styles/GlobalStyles'
import { Link } from 'react-router-dom'

const About = () => {

  return (
  <section className="about-container">
    <div className="abount-content">

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