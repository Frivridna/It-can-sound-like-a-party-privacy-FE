import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

export const App = () => {

const [name, setName] = useState('')

useEffect(() => {
	socket.on(name => {
    setName(name)
	})
})

const onSubmit = (e) => {
	e.preventDefault()
	socket.emit(name)
  setName('')
}

const onTextChange = e => {
	setName(e.target.value)
}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<h1> Name/Role: </h1>
				<div>
						<textarea
							name="name" 
							onChange={e => onTextChange(e)} 
							value={name}
            />
				</div>
					<button type="submit">START SESSION!</button>
				</form>
		</div>
	)
}
