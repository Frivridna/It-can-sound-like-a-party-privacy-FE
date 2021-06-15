import React from 'react'
import socketio from "socket.io-client"
import { ENDPOINT } from '../reusable/urls'
export const socket = socketio.connect(ENDPOINT)
export const SocketContext = React.createContext()
