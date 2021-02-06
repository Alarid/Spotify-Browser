import api from '../api'
import { SearchAlbumsResponse } from './albums.request.types'

export const searchAlbums = async (search: string): Promise<SearchAlbumsResponse | null> => {
  try {
    const encodedSearh = encodeURIComponent(search)
    const response = await api.get(`search?q=${encodedSearh}&type=album`)
    return response.data
  } catch (error) {
    console.error('SEARCH ALBUMS / ', error.response.data)
    return null
  }
}
