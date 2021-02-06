export type AlbumCover = {
  height: number
  width: number
  url: string
}

export type AlbumResult = {
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
