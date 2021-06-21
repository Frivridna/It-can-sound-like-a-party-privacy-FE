import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { Button } from '../styles/GlobalStyles'
import '../styles/Finishpage.css'

import {FacebookShareButton, WhatsappShareButton, LinkedinShareButton, TelegramShareButton} from 'react-share';

import {FacebookIcon, WhatsappIcon, LinkedinIcon, TelegramIcon} from 'react-share';

const FinishPage = () => {

  return (
    <section className="final-page-container">
      <div>
        <div>
          <div className="final-page-text"><p>Do the experience again</p></div>
          <Link to={`/`} >
            <Button>RESTART</Button>
          </Link >
        </div>
        <div>
          <div className="final-page-text"><p>Read more about the composer</p></div>
          <Link to={`/about`} >
            <Button>ABOUT</Button>
          </Link> 
        </div>
        <div>
          <div className="final-page-text"><p>Share this experience with friends</p></div>
              <Container>
                <Segment>
                  <FacebookShareButton url="https://itcansoundlikeapartyprivacy.netlify.app/"
                    quote={"Hey use our app"}
                  >
                    <FacebookIcon logoFillColor="white" round={true}> </FacebookIcon>
                  </FacebookShareButton>
                  <WhatsappShareButton url="https://itcansoundlikeapartyprivacy.netlify.app/"
                    quote={"Hey use our app"}
                  >
                    <WhatsappIcon logoFillColor="white" round={true}> </WhatsappIcon>
                  </WhatsappShareButton>
                  <LinkedinShareButton url="https://itcansoundlikeapartyprivacy.netlify.app/"
                    quote={"Hey use our app"}
                  >
                    <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
                  </LinkedinShareButton>
                  <TelegramShareButton url="https://itcansoundlikeapartyprivacy.netlify.app/"
                    quote={"Hey use our app"}
                  >
                    <TelegramIcon logoFillColor="white" round={true}></TelegramIcon>
                  </TelegramShareButton>
                </Segment>
              </Container>
          </div>
        </div>
    </section>
  )
}

export default FinishPage