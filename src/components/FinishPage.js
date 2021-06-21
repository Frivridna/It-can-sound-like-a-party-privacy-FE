import React from 'react'
import styled from 'styled-components/macro'

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 50%;
  height: 50%;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`;

const Button = styled.button`
  width: 120px;
  height: 50px;
  margin: 20px 0 0 0;
  padding: 5px 20px;
  background: none;
  border: 1px solid #fff;
  font-family: 'Inter', sans-serif;
  border-radius: 5px; 
`

const FinishPage = () => {

  return (
    <>
    <Background>
        <Button>DO THE EXPERIENCE AGAIN</Button>
        <Button>ABOUT</Button>
        <Button>SHARE</Button>
    </Background>
    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </>
  )
}

export default FinishPage