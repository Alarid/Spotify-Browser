import axios, { AxiosInstance } from 'axios'
import { apiAuthConfig, apiConfig } from './apiConfig'
import Cookies from 'js-cookie'
import qs from 'qs'
import { NewTokenResponse } from 'src/typings/api'

// Instanciate axios
const axiosInstance: AxiosInstance = axios.create({
  ...apiConfig,
  headers: {
    ...apiConfig.headers,
  },
})

// Instanciate an axios instance dedicated to get an authorization token
const axiosAuthInstance: AxiosInstance = axios.create({
  ...apiAuthConfig,
  headers: {
    ...apiAuthConfig.headers,
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

// Response interceptor to refresh token if necessary
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      const response = await askNewToken()
      if (response) {
        originalRequest._retry = true
        Cookies.set('token', response.access_token, { expires: response.expire })
      }
      return axiosInstance(originalRequest)
    }
  }
)

/**
 * Ask a new token to the Auth API
 */
const askNewToken = async (): Promise<NewTokenResponse | null> => {
  try {
    const res = await axiosAuthInstance.post(
      '/token',
      qs.stringify({
        grant_type: 'client_credentials',
      })
    )
    return {
      access_token: res.data.access_token,
      expire: res.data.expires_in,
    }
  } catch (error) {
    console.error('ASK NEW TOKEN / ', error.response.data)
    return null
  }
}

// Export a "singleton" of the api to use anywhere
export default axiosInstance
