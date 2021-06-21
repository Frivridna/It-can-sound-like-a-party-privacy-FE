export const ENDPOINT = "https://icslap-p.herokuapp.com/"
//export const ENDPOINT = "https://icslap-p.herokuapp.com/"

//export const API_URL = "https://icslap-p.herokuapp.com/signin"

export const BASE_URL = "https://icslap-p.herokuapp.com/"

export const API_URL = (slug) => `${BASE_URL}${slug}`

export const DELETE_URL = (_id) => `https://icslap-p.herokuapp.com/sounds/${_id}`
//http://localhost:4001