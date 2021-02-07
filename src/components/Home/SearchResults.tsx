import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components/macro'

import { AlbumResult } from 'requests/albums/albums.request.types'
import { getArtists, getImage } from 'helpers/album'
import { Link } from 'react-router-dom'

// Props
type Props = {
  results: AlbumResult[]
}

// Album container
const StyledAlbum = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
`

// Cover card
const Cover = styled.div`
  border-radius: 10px;
  height: 250px;
  padding: 10px;
  box-shadow: ${({ theme }) => `${theme.outerShadow}, ${theme.innerShadow}`};
  background-color: ${({ theme }) => theme.black};
  margin-bottom: 5px;
`

// Cover image
const CoverImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// Textual informations (name, artist)
const Infos = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`

// Artist
const MadeBy = styled.small`
  color: ${({ theme }) => theme.faded};
`

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
        <Col key={idx} xs={3} className="mb-3">
          <Link to={`/album/${album.id}`}>
            <StyledAlbum>
              <Cover>
                <CoverImg src={album.image} alt={`${album.name} cover`} />
              </Cover>
              <Infos>
                <span>{album.name}</span>
                <MadeBy>by {album.artists}</MadeBy>
              </Infos>
            </StyledAlbum>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default SearchResults
