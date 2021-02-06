import { AlbumCover } from 'src/requests/albums/albums.request.types'

export const getImage = (images: AlbumCover[]): string => {
  const image = images.find((img) => img.width <= 300)
  if (image) {
    return image.url
  } else if (!image && images.length > 0) {
    return images[0].url
  } else {
    // Placeholder
    return 'https://recordsale.de/assets/record_placeholder-f3f829566497dc26b0abfae50ddeb5c7bc48fe1c58dc1c7fe62a26d64988b9c9.svg'
  }
}
