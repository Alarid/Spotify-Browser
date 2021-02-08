import styled from 'styled-components/macro'
import { md } from 'styles/media'

// Main container
export const Container = styled.div`
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

// Cover container (for the mobile card)
export const Cover = styled.div`
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

// Cover image
export const CoverImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// Informations section
export const Infos = styled.div`
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

// Main infos: album name + artist
export const MainInfos = styled.div`
  text-align: center;

  ${md(`
    text-align: unset;
  `)}
`

// Bottom line of informations section: technical infos + back button
export const BottomLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${md(`
    flex-direction: row;
  `)}
`

// Number of tracks, total duration, release date
export const Technical = styled.div`
  color: ${(props) => props.theme.faded};
  margin-bottom: 20px;

  ${md(`
    margin-bottom: unset;
  `)}
`
