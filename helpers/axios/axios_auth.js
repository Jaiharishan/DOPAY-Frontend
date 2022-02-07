import axios from 'axios'

const axios_auth = axios.create({
  baseURL: 'http://localhost:8080/auth/',
})

export default axios_auth
