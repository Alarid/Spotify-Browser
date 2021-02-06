import React, { useState } from 'react'

import SearchNbResults from 'components/Home/SearchNbResults'
import SearchBar from 'components/Home/SearchBar'
import SearchResults from 'components/Home/SearchResults'
import { searchAlbums } from 'requests/albums/albums.request'
import { SearchAlbumsResponse } from 'requests/albums/albums.request.types'
import Button from 'components/Shared/Button'

const Home: React.FC = () => {
  const [results, setResults] = useState<SearchAlbumsResponse | null>()
  const [query, setQuery] = useState('')
  const [moreLoading, setMoreLoading] = useState(false)

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

  const handleShowMore = async () => {
    if (!results) return
    const { offset, limit, items } = results.albums
    setMoreLoading(true)
    const moreResults = await searchAlbums(query, offset + limit)
    if (moreResults && moreResults.albums.items.length > 0) {
      setResults({
        albums: {
          ...results.albums,
          offset: moreResults.albums.offset,
          items: [...items, ...moreResults.albums.items],
        },
      })
    }
    setMoreLoading(false)
  }

  const total = results?.albums.total || 0
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-5">
        {query.trim().length > 0 && <SearchNbResults query={query} total={total} />}
        {results && results.albums.items.length > 0 && (
          <>
            <SearchResults results={results.albums.items} />
            <div className="mt-3 mb-5 text-center">
              {total > results.albums.limit + results.albums.offset && (
                <Button isLoading={moreLoading} onClick={handleShowMore}>
                  Montrer plus
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
