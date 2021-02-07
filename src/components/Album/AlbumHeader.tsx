import React from 'react'
import { ChevronLeft } from 'react-feather'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from 'components/Shared/Button'
import { md } from 'styles/media'

type Props = {
  album: AlbumDetails
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${md(`
    flex-direction: row;
    height: 300px;
    align-items: unset;
  `)}
`

const Cover = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${({ theme }) => `${theme.outerShadow}, ${theme.innerShadow}`};
  background-color: ${({ theme }) => theme.black};
  margin-bottom: 20px;

  ${md(`
    width: 300px;
    height: 300px;
    margin-right: 30px;
    border-radius: 0;
    box-shadow: unset;
    background-color: unset;
    padding: 0;
    margin-bottom: 0px;
  `)}
`

const CoverImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${md(`
    flex: 1;
    padding: 10px 0;
    justify-content: space-between;
    align-items: unset;
  `)}
`

const MainInfos = styled.div`
  text-align: center;

  ${md(`
    text-align: unset;
  `)}
`

const BottomLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${md(`
    flex-direction: row;
  `)}
`

const Technical = styled.div`
  color: ${(props) => props.theme.faded};
  margin-bottom: 20px;

  ${md(`
    margin-bottom: unset;
  `)}
`

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
