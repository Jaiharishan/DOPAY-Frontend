import axios from 'axios'

let token
if (typeof window !== 'undefined') {
  token = localStorage.getItem('token')
  console.log(token)
}

const axios_api = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    auth_token: token,
  },
})

export default axios_api
