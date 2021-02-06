import api from '../api'
import { SearchAlbumsResponse } from './albums.request.types'

export const searchAlbums = async (
  search: string,
  offset = 0
): Promise<SearchAlbumsResponse | null> => {
  try {
    const encodedSearh = encodeURIComponent(search)
    const response = await api.get(`search?q=${encodedSearh}&type=album&offset=${offset}`)
    return response.data
  } catch (error) {
    console.error('SEARCH ALBUMS / ', error)
    return null
  }
}
