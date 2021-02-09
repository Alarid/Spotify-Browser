import axios, { AxiosInstance } from 'axios'
import { apiConfig } from './apiConfig'
import Cookies from 'js-cookie'

const axiosInstance: AxiosInstance = axios.create({
  ...apiConfig,
  headers: {
    ...apiConfig.headers,
  },
})

// Request interceptor to set authorization header
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('token')
    config.headers = {
      Authorization: `Bearer ${token}`,
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Export a "singleton" of the api to use anywhere
export default axiosInstance
