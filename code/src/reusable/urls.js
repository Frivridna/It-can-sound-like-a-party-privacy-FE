export const BASE_URL = "https://icslap-p.herokuapp.com/"
export const API_URL = (slug) => `${BASE_URL}${slug}`
export const DELETE_URL = (_id) => `https://icslap-p.herokuapp.com/sounds/${_id}`
export const SOUND_URL = (slug) => `https://icslap-p.herokuapp.com/sounds/play/${slug}`
//export const SOUND_URL = (slug) => `http://localhost:4001/sounds/play/${slug}`
