import axios from 'axios'

const api = axios.create({
  //baseURL: 'https://localhost:3000/api'
  baseURL: 'https://dogtraining-production.up.railway.app/api'
})

export default api