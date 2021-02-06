import { encode } from 'js-base64'

// Config for Spotify Web API
export const apiConfig = {
  timeout: 30000,
  baseURL: process.env.REACT_APP_SPOTIFY_API_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
}

// Encode client ID and SECRET in base 64
const basicAuth = encode(
  `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
)

// Config for Spotify Auth API
export const apiAuthConfig = {
  timeout: 30000,
  baseURL: process.env.REACT_APP_SPOTIFY_API_AUTH_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `Basic ${basicAuth}`,
    },
  },
}
