import axios from 'axios'

/* Base URL to make the requests */

const baseUrl = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

//baseUrl.get("/action-movies")

// https://api.themoviedb.org/3/action-movies

export default baseUrl;