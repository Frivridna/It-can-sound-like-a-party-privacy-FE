import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client"
//const ENDPOINT = "http://192.168.1.145:4001" //127.0.0.1
//const ENDPOINT = "http://http://172.25.145.136:4001"
const ENDPOINT = "http://localhost:4001"

export const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    //const socket = io.connect('http://localhost:4001')
    socket.on("FromAPI", data => {
      setResponse(data)
    });
    // Clean up the effect
    return () => socket.disconnect();
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}
