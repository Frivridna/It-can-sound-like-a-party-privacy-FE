import React from 'react'
import styled from 'styled-components/macro'

import '../styles/Sounds.css'

const Container = styled.div`
  width: 100%;
  border-radius: 6px;
  background: #f9f7f5;
  margin-bottom: 20px;
`;  

const Title = styled.p`
  color: #191919;
  margin: 0;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Url = styled.p`
  word-break: break-word;
  margin: 0 0 10px 0;
  color: #191919;
`;

const Description = styled.p`
  word-break: break-word;
  margin: 0;
  color: #191919;
`;

const Titlebar = styled.div`
  display: flex;
  align-items: center;
`; 

const Content = styled.div`
  padding: 20px;
`;

const ChildrenContent = styled.div`
  background: #f9f7f5;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const Card = ({ title, url, description, className, children }) => {
  return (
    <Container className={className}> 
      <Content>
        <Titlebar>
          <div>
          {title && 
            <Title>
              <p className="card-text">Title:</p>{title}
            </Title>
          }
          {url && 
            <Url>
              <p className="card-text">URL:</p>{url}
            </Url>
          }
          {description && 
            <Description>
              <p className="card-text">Description:</p> {description}
            </Description>
          }
          </div>
          </Titlebar>
          {children && <ChildrenContent>{children}</ChildrenContent>}
      </Content>
    </Container>
  )
}