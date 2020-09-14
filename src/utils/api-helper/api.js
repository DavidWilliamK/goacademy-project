import axios from "axios"

const CORS_EVERYWHERE = 'https://cors-anywhere.herokuapp.com'
const ROOT_URL = 'https://developers.zomato.com/api/v2.1'
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY

export const fetchCities = async(city) => {
    const response = await axios.get(`${CORS_EVERYWHERE}/${ROOT_URL}`, {headers: {
        'Content-Type': 'application/json',
        'user-key': API_KEY
    }})
}