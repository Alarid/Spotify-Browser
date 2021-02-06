import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components/macro'

type Props = {
  albums: Album[]
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

const SearchResults: React.FC<Props> = ({ albums }) => {
  return (
    <Row className="mt-5">
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
