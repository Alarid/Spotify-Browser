import { getTrackDuration } from 'helpers/album'
import React from 'react'
import styled from 'styled-components/macro'

type Props = {
  tracks: AlbumTrack[]
}

const Container = styled.div`
  margin: 30px 0;
`

const TrackRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-top: 1px solid ${(props) => props.theme.faded};
`

const TrackColGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

type TrackColProps = {
  strong?: boolean
}
const TrackCol = styled.div<TrackColProps>`
  margin-right: 30px;
  color: ${(props) => (props.strong ? props.theme.white : props.theme.faded)};

  &:last-child {
    margin-right: 0;
  }
`

const AlbumTracks: React.FC<Props> = ({ tracks }) => {
  return (
    <Container>
      <TrackRow>
        <TrackColGroup>
          <TrackCol>#</TrackCol>
          <TrackCol>Track</TrackCol>
        </TrackColGroup>
        <TrackColGroup>
          <TrackCol>Length</TrackCol>
        </TrackColGroup>
      </TrackRow>
      {tracks.map((track, idx) => (
        <TrackRow key={idx}>
          <TrackColGroup>
            <TrackCol>{track.track_number}</TrackCol>
            <TrackCol strong>{track.name}</TrackCol>
          </TrackColGroup>
          <TrackColGroup>
            <TrackCol>{getTrackDuration(track.duration_ms)}</TrackCol>
          </TrackColGroup>
        </TrackRow>
      ))}
    </Container>
  )
}

export default AlbumTracks
