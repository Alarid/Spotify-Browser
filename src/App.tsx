import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { searchAlbums } from './requests/albums/albums.request'

const App: React.FC = () => {
  const fetchAlbums = async () => {
    const data = await searchAlbums('hocus pocus')
    console.log(data)
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <Container>
      <Jumbotron className="mt-5">
        <h1>
          CRA TypeScript Bootstrap Template{' '}
          <span role="img" aria-label="rocket emoji">
            🚀
          </span>
        </h1>
        <p>Ready to roll !</p>
      </Jumbotron>
    </Container>
  )
}

export default App
