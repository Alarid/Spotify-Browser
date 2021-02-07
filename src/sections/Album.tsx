import React from 'react'
import { useParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import useSWR from 'swr'

import api from 'requests/api'
import { AlbumDetailsResponse } from 'requests/albums/albums.request.types'
import AlbumLayout from 'components/Album/AlbumLayout'
import { getArtists, getImage, getTotalDuration } from 'helpers/album'
import AlbumHeader from 'components/Album/AlbumHeader'
import AlbumTracks from 'components/Album/AlbumTracks'

const fetcher = (query: string) => api.get(query).then((r) => r.data)

const Album: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>()
  const { data, error } = useSWR<AlbumDetailsResponse>(`/albums/${albumId}`, fetcher)

  // An error occured while fetching album details
  if (error) {
    return (
      <AlbumLayout>
        <Alert variant="danger">
          Une erreur est survenue, veuillez nous excuser pour la gêne occasionnée
        </Alert>
      </AlbumLayout>
    )
  }

  // Loading state
  if (!data) {
    return (
      <AlbumLayout>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Spinner animation="border" role="status" className="mr-3" /> Loading album content...
        </div>
      </AlbumLayout>
    )
  }

  const tracks: AlbumTrack[] = data.tracks.items
  const album: AlbumDetails = {
    ...data,
    image: getImage(data.images),
    artists: getArtists(data.artists),
    duration: getTotalDuration(tracks),
    tracks,
  }
  return (
    <AlbumLayout>
      <AlbumHeader album={album} />
      <AlbumTracks tracks={album.tracks} />
    </AlbumLayout>
  )
}

export default Album
