import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL_API
})

export default axiosInstance
