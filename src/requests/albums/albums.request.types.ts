// An album cover image
export type AlbumCover = {
  height: number
  width: number
  url: string
}

// Artist
export type AlbumArtist = {
  name: string
}

// The fields we need for the items returned by an album search
export type AlbumResult = {
  id: string
  name: string
  artists: AlbumArtist[]
  images: AlbumCover[]
}

// API response for an album search
export type SearchAlbumsResponse = {
  albums: {
    items: AlbumResult[]
    limit: number
    offset: number
    total: number
    next: string
    previous: string
  }
}

// API response for the details of an album
export type AlbumDetailsResponse = {
  id: string
  name: string
  artists: {
    name: string
  }[]
  images: AlbumCover[]
  release_date: string
  total_tracks: number
  tracks: {
    items: AlbumTrack[]
  }
}
