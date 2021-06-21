import React from 'react'

import '../styles/Finalpage.css'
import { Button } from '../styles/GlobalStyles'
import { Link } from 'react-router-dom'

const About = () => {

  return (
  <section className="about-container">
    <div className="abount-content">
      <h1>Name Surname</h1>
      <p>Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor Lorum Ipsum Dolor</p>
      <div className="about-button">
        <Link to={`/`} >
          <Button>STARTPAGE</Button>
        </Link >
      </div>
    </div>
  </section>
  )
}

export default About