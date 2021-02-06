import React, { useState } from 'react'
import SearchNbResults from 'src/components/Home/SearchNbResults'
import { SearchAlbumsResponse } from 'src/requests/albums/albums.request.types'
import SearchBar from '../components/Home/SearchBar'
import SearchResults from '../components/Home/SearchResults'
import { searchAlbums } from '../requests/albums/albums.request'

const Home: React.FC = () => {
  const [results, setResults] = useState<SearchAlbumsResponse | null>()
  const [query, setQuery] = useState('')

  const handleSearch = async (query: string) => {
    setQuery(query)
    if (query.trim().length === 0) {
      setResults(null)
    } else {
      const searchResults = await searchAlbums(query)
      console.log(searchResults)
      setResults(searchResults)
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-5">
        {query.trim().length > 0 && (
          <SearchNbResults query={query} total={results?.albums.total || 0} />
        )}
        <SearchResults results={results?.albums.items || []} />
      </div>
    </>
  )
}

export default Home
