export const ENDPOINT = "http://localhost:4001"
//export const ENDPOINT = "https://icslap-p.herokuapp.com/"

//export const API_URL = "https://icslap-p.herokuapp.com/signin"

export const BASE_URL = "http://localhost:4001"

export const API_URL = (slug) => `${BASE_URL}${slug}`

export const DELETE_URL = (_id) => `http://localhost:4001/sounds/${_id}`
//http://localhost:4001