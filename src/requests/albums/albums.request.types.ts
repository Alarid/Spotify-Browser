export type AlbumCover = {
  height: number
  width: number
  url: string
}

export type SearchAlbumsResponse = {
  albums: {
    items: {
      name: string
      artists: {
        name: string
      }[]
      images: AlbumCover[]
    }[]
  }
  limit: number
  offset: number
  total: number
  next: string
  previous: string
}
