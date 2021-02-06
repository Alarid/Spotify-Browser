import React from 'react'
import styled from 'styled-components/macro'

type Props = {
  query: string
  total: number
}

const Container = styled.div`
  margin-bottom: 20px;
  margin-left: 10px;
  color: ${(props) => props.theme.faded};
`

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
