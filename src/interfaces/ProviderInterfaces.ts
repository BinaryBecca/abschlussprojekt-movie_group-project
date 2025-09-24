import type { Genre } from './IGenres'
import type { IMovieDetails } from './IMovieDetails'
import type { Result } from './ITrendingMovies'
import type { IVideo } from './IVideo'

// TODO API-Interfaces prüfen und ergänzen

export interface IState {
  loading: boolean
  error: string | null
  genres: Genre[]
  trending: Result[]
  details: IMovieDetails | null
  videos: IVideo[]
  query: string
  searchResults: Result[]
  // details: IDetails[]
}

export type TAction =
  | { type: 'START_LOADING' }
  | { type: 'FETCH_START' }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'FETCH_GENRES'; payload: Genre[] }
  | { type: 'FETCH_DETAILS'; payload: IMovieDetails }
  | { type: 'FETCH_VIDEOS'; payload: IVideo[] }
  | { type: 'FETCH_TRENDING'; payload: Result[] }
  | { type: 'FETCH_SEARCHRESULTS'; payload: Result[] }
  | { type: 'FETCH_QUERY'; payload: string }

// | { type: "FETCH_DETAILS"; payload: IDetails[] }
