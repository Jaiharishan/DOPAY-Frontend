import axios from 'axios'

const axios_ = axios.create({
  baseURL: 'http://localhost:8080/api/',
})

export default axios_
