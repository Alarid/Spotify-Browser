import styled from 'styled-components/macro'
import { md } from 'styles/media'

// Component container
export const Container = styled.div`
  margin: 30px 0;
`

// Represents a track's line in the tracklist
export const TrackRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-top: 1px solid ${(props) => props.theme.faded};
`

// Group of columns in the row
export const TrackColGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

// Column in a row
type TrackColProps = {
  strong?: boolean
}
export const TrackCol = styled.div<TrackColProps>`
  margin-right: 20px;
  color: ${(props) => (props.strong ? props.theme.white : props.theme.faded)};

  &:last-child {
    margin-right: 0;
  }

  ${md(`
    margin-right: 30px;
  `)}
`
