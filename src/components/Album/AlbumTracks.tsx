import Explicit from 'components/Shared/Explicit'
import { getTrackDuration } from 'helpers/album'
import React from 'react'
import { Container, TrackCol, TrackColGroup, TrackRow } from './AlbumTracks.styles'

// Props
type Props = {
  tracks: AlbumTrack[]
}

/**
 * Album Tracks Component
 *
 * Shows the tracklist of an album
 */
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
            {track.explicit && (
              <TrackCol>
                <Explicit />
              </TrackCol>
            )}
            <TrackCol>{getTrackDuration(track.duration_ms)}</TrackCol>
          </TrackColGroup>
        </TrackRow>
      ))}
    </Container>
  )
}

export default AlbumTracks
