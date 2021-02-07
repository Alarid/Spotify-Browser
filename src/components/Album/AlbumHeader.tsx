import React from 'react'
import { ChevronLeft } from 'react-feather'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from 'components/Shared/Button'

type Props = {
  album: AlbumDetails
}

const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: row;
`

const Cover = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 30px;
`

const Infos = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`

const BottomLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Technical = styled.div`
  color: ${(props) => props.theme.faded};
`

const AlbumHeader: React.FC<Props> = ({ album }) => {
  const history = useHistory()

  return (
    <Container>
      <Cover src={album.image} alt={`${album.name} album cover`} />
      <Infos>
        <section>
          <h2>{album.name}</h2>
          <p>by {album.artists}</p>
        </section>
        <BottomLine>
          <Technical>
            {album.tracks.length} tracks - {album.duration} - {album.release_date}
          </Technical>
          <Button onClick={() => history.goBack()}>
            <ChevronLeft /> Retour
          </Button>
        </BottomLine>
      </Infos>
    </Container>
  )
}

export default AlbumHeader
