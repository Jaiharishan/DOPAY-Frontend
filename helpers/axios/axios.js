import axios from 'axios'

const axios_ = axios.create({
  baseURL: 'http://localhost:4000/api/',
})

export default axios_
