import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AlbumResult } from 'requests/albums/albums.request.types'
import { getArtists, getImage } from 'helpers/album'
import { StyledLink, StyledAlbum, Cover, CoverImg, Infos, MadeBy } from './SearchResults.styles'

// Props
type Props = {
  results: AlbumResult[]
}

/**
 * Show search results for an album query
 */
const SearchResults: React.FC<Props> = ({ results }) => {
  const [albums, setAlbums] = useState<Album[]>([])

  // Convert search results in albums to display
  useEffect(() => {
    setAlbums(
      results.map((result) => ({
        ...result,
        image: getImage(result.images),
        artists: getArtists(result.artists),
      }))
    )
  }, [results])

  // Render
  return (
    <Row>
      {albums.map((album, idx) => (
        <Col key={idx} xs={6} md={4} lg={3} className="mb-3">
          <StyledLink to={`/album/${album.id}`}>
            <StyledAlbum>
              <Cover>
                <CoverImg src={album.image} alt={`${album.name} cover`} />
              </Cover>
              <Infos>
                <span>{album.name}</span>
                <MadeBy>by {album.artists}</MadeBy>
              </Infos>
            </StyledAlbum>
          </StyledLink>
        </Col>
      ))}
    </Row>
  )
}

export default SearchResults
