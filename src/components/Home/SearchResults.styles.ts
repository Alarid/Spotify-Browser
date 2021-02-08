import styled from 'styled-components/macro'
import { lg, md, sm, xl } from 'styles/media'
import { Link } from 'react-router-dom'

// Album link
export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

// Album container
export const StyledAlbum = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
`

// Cover card
export const Cover = styled.div`
  border-radius: 10px;
  height: 150px;
  padding: 10px;
  box-shadow: ${({ theme }) => `${theme.outerShadow}, ${theme.innerShadow}`};
  background-color: ${({ theme }) => theme.black};
  margin-bottom: 5px;

  ${sm(`
    height: 180px;
  `)}

  ${md(`
    height: 200px;
  `)}

  ${lg(`
    height: 220px;
  `)}

  ${xl(`
    height: 250px;
  `)}
`

// Cover image
export const CoverImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// Textual informations (name, artist)
export const Infos = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`

// Artist
export const MadeBy = styled.small`
  color: ${({ theme }) => theme.faded};
`
