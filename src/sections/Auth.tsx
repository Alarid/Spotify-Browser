import React from 'react'
import Button from 'components/Shared/Button'
import qs from 'qs'
import { useLocation } from 'react-router-dom'
import { authHash } from 'requests/apiConfig'
import Alert from 'react-bootstrap/Alert'

// Base Url for Spotify Authentication
const query = `${process.env.REACT_APP_SPOTIFY_API_AUTH_URL}/authorize`

// Redirect URI
const redirectUri =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/Spotify-Browser'
    : process.env.PUBLIC_URL

// Query params
const queryParams = qs.stringify({
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  response_type: 'token',
  redirect_uri: redirectUri,
  state: authHash,
})

/**
 * Auth section
 *
 * Shows a button that opens Spotify Authentication Page
 */
const Auth: React.FC = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const error = params.get('error')

  return (
    <div className="text-center mt-5">
      <a href={`${query}?${queryParams}`}>
        <Button>Login to Spotify</Button>
      </a>
      {error && (
        <Alert variant="danger" className="mt-5">
          You need to allow Spotify Browser to access basic informations about your account in order
          to be able to browser through Spotify's albums collection
        </Alert>
      )}
    </div>
  )
}

export default Auth
