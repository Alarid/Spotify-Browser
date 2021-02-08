import React from 'react'
import styled from 'styled-components/macro'

// Props
type Props = {
  query: string
  total: number
}

// Container
const Container = styled.div`
  margin-bottom: 20px;
  margin-left: 10px;
  color: ${(props) => props.theme.faded};
`

/**
 * Search Nb Results Component
 *
 * Shows the number of results for the user query
 */
const SearchNbResults: React.FC<Props> = ({ query, total }) => {
  return (
    <Container>
      {total === 0
        ? `Aucun résultat pour ${query}`
        : `${total} album${total > 1 ? 's' : ''} trouvés pour ${query}`}
    </Container>
  )
}

export default SearchNbResults
