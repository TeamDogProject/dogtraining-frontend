import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dogtrainingapi.onrender.com/api',
})

export default api