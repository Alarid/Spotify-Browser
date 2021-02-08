import React from 'react'
import { ChevronLeft } from 'react-feather'
import { useHistory } from 'react-router-dom'
import Button from 'components/Shared/Button'
import {
  Container,
  Cover,
  CoverImg,
  Infos,
  MainInfos,
  BottomLine,
  Technical,
} from './AlbumHeader.styles'

// Props
type Props = {
  album: AlbumDetails
}

/**
 * Album header component
 *
 * Shows album cover, name, artists and technical informations
 */
const AlbumHeader: React.FC<Props> = ({ album }) => {
  const history = useHistory()

  return (
    <Container>
      <Cover>
        <CoverImg src={album.image} alt={`${album.name} album cover`} />
      </Cover>
      <Infos>
        <MainInfos>
          <h2>{album.name}</h2>
          <p>by {album.artists}</p>
        </MainInfos>
        <BottomLine>
          <Technical>
            {album.tracks.length} tracks - {album.duration} - {album.release_date}
          </Technical>
          <Button onClick={() => history.goBack()}>
            <ChevronLeft /> Back
          </Button>
        </BottomLine>
      </Infos>
    </Container>
  )
}

export default AlbumHeader
