import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
import { getImage } from '../helpers/album'
import { searchAlbums } from '../requests/albums/albums.request'

const Home: React.FC = () => {
  const [results, setResults] = useState<Album[]>([])

  const handleSearch = async (query: string) => {
    const searchResults = await searchAlbums(query)
    if (searchResults) {
      const items = searchResults.albums.items
      setResults(
        items.map((item) => ({
          name: item.name,
          image: getImage(item.images),
          artists: item.artists.map((artist) => artist.name).join(', '),
        }))
      )
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResults albums={results} />
    </>
  )
}

export default Home
