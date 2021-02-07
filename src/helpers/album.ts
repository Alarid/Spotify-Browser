import { AlbumCover } from 'requests/albums/albums.request.types'
import humanizeDuration from 'humanize-duration'

const shortEnHumanizer = humanizeDuration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      h: () => 'h',
      m: () => 'm',
      s: () => 's',
    },
  },
})

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

export const getArtists = (artists: Array<{ name: string }>): string =>
  artists.map((artist) => artist.name).join(', ')

export const getTotalDuration = (tracks: AlbumTrack[]): string => {
  const durationMs = tracks.reduce((total, track) => total + track.duration_ms, 0)
  return shortEnHumanizer(durationMs, { units: ['h', 'm'], round: true, delimiter: ' ' })
}

export const getTrackDuration = (durationMs: number): string =>
  shortEnHumanizer(durationMs, { units: ['m', 's'], round: true, delimiter: ' ' })
