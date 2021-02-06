import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components/macro'
import { AlbumResult } from 'src/requests/albums/albums.request.types'
import { getImage } from '../../helpers/album'

type Props = {
  results: AlbumResult[]
}

const StyledAlbum = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
`

const Cover = styled.div`
  border-radius: 10px;
  height: 250px;
  padding: 10px;
  box-shadow: ${({ theme }) => `${theme.outerShadow}, ${theme.innerShadow}`};
  background-color: ${({ theme }) => theme.black};
  margin-bottom: 5px;
`

const CoverImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Infos = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`

const MadeBy = styled.small`
  color: ${({ theme }) => theme.faded};
`

const SearchResults: React.FC<Props> = ({ results }) => {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    setAlbums(
      results.map((result) => ({
        name: result.name,
        image: getImage(result.images),
        artists: result.artists.map((artist) => artist.name).join(', '),
      }))
    )
  }, [results])

  return (
    <Row>
      {albums.map((album, idx) => (
        <Col key={idx} xs={3} className="mb-3">
          <StyledAlbum>
            <Cover>
              <CoverImg src={album.image} alt={`${album.name} cover`} />
            </Cover>
            <Infos>
              <span>{album.name}</span>
              <MadeBy>by {album.artists}</MadeBy>
            </Infos>
          </StyledAlbum>
        </Col>
      ))}
    </Row>
  )
}

export default SearchResults
