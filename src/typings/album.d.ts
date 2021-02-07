type Album = {
  id: string
  name: string
  image: string
  artists: string
}

type AlbumTrack = {
  name: string
  duration_ms: number
  explicit: boolean
  track_number: number
}

type AlbumDetails = Album & {
  release_date: string
  total_tracks: number
  duration: string
  tracks: AlbumTrack[]
}
