//export const ENDPOINT = "http://localhost:4001"
export const ENDPOINT = "https://icslap-p.herokuapp.com/"

//export const API_URL = "https://icslap-p.herokuapp.com/signin"

export const BASE_URL = "https://icslap-p.herokuapp.com/"  //http://localhost:4001/  https://icslap-p.herokuapp.com/

export const API_URL = (slug) => `${BASE_URL}${slug}`

export const DELETE_URL = (_id) => `https://icslap-p.herokuapp.com/sounds/${_id}` //http://localhost:4001/sounds/${_id}
//http://localhost:4001

export const TEST_URL = (slug) => `https://icslap-p.herokuapp.com/sounds/play/${slug}` //http://localhost:4001/sounds/play/  https://icslap-p.herokuapp.com/
