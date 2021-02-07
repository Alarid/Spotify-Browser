export type AlbumCover = {
  height: number
  width: number
  url: string
}

export type AlbumResult = {
  id: string
  name: string
  artists: {
    name: string
  }[]
  images: AlbumCover[]
}

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
