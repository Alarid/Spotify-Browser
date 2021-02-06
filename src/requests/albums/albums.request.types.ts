export type SearchAlbumsResponse = {
  albums: {
    items: Album[]
  }
  limit: number
  offset: number
  total: number
  next: string
  previous: string
}
