import React, { useState } from 'react'

import SearchNbResults from 'components/Home/SearchNbResults'
import SearchBar from 'components/Home/SearchBar'
import SearchResults from 'components/Home/SearchResults'
import { searchAlbums } from 'requests/albums/albums.request'
import { SearchAlbumsResponse } from 'requests/albums/albums.request.types'
import Button from 'components/Shared/Button'

/**
 * Home Section
 *
 * Search bar, search results and "show more" button
 */
const Home: React.FC = () => {
  const [results, setResults] = useState<SearchAlbumsResponse | null>(null)
  const [query, setQuery] = useState('')
  const [moreLoading, setMoreLoading] = useState(false)

  /**
   * Trigger an API call to search albums
   * @param {string} query - user query
   */
  const handleSearch = async (query: string) => {
    setQuery(query)
    if (query.trim().length === 0) {
      // If query is empty, reset results in state
      setResults(null)
    } else {
      // Update state with results from API
      const searchResults = await searchAlbums(query)
      setResults(searchResults)
    }
  }

  /**
   * Trigger an API call to show more results for current query
   */
  const handleShowMore = async () => {
    if (!results) return
    setMoreLoading(true)
    const { offset, limit, items } = results.albums
    const moreResults = await searchAlbums(query, offset + limit)
    if (moreResults && moreResults.albums.items.length > 0) {
      // Update the state with the new offset
      // and adds new results to current results
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

  // Render
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
