import { AlbumArtist, AlbumCover } from 'requests/albums/albums.request.types'
import humanizeDuration from 'humanize-duration'

// Instanciate humanizer with custom language for short litteral units
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

/**
 * Get Album Cover
 *
 * @param {AlbumCover[]} images - album images fetched from the API
 * @return {string} - the first image below 300px width if found, or first image, or placeholder
 */
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

/**
 * Get Album Artists
 *
 * @param {AlbumArtist[]} artists - array of artists fetched from the API
 * @return {string} - a concatenation of all the artists names
 */
export const getArtists = (artists: AlbumArtist[]): string =>
  artists.map((artist) => artist.name).join(', ')

/**
 * Get Total Duration
 *
 * @param {AlbumTrack[]} tracks - album tracks fetched from the API
 * @return {string} - a humanized total duration of the album (sum of all tracks durations)
 */
export const getTotalDuration = (tracks: AlbumTrack[]): string => {
  const durationMs = tracks.reduce((total, track) => total + track.duration_ms, 0)
  return shortEnHumanizer(durationMs, { units: ['h', 'm'], round: true, delimiter: ' ' })
}

/**
 * Get Track Duration
 *
 * @param {number} durationMs - duration of the track in milliseconds
 * @return {string} - a humanized duraction for the track
 */
export const getTrackDuration = (durationMs: number): string =>
  shortEnHumanizer(durationMs, { units: ['m', 's'], round: true, delimiter: ' ' })
