import axios from "axios"

const CORS_EVERYWHERE = 'https://cors-anywhere.herokuapp.com'
const ROOT_URL = 'https://developers.zomato.com/api/v2.1/cities'
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY

export const fetchCities = async (city) => {
    const response = await axios.get(`${ROOT_URL}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'user-key': `${API_KEY}`
        },
        params: {
            q: city
        }
    })
    return response.data
}