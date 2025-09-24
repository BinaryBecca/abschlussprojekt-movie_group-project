import type { Genre } from './IGenres'
import type { IMovieDetails } from './IMovieDetails'
import type { Result } from './ITrendingMovies'

// TODO API-Interfaces prüfen und ergänzen

export interface IState {
  loading: boolean
  error: string | null
  genres: Genre[]
  trending: Result[]
  details: IMovieDetails | null
  query: string
  // details: IDetails[]
}

export type TAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'FETCH_GENRES'; payload: Genre[] }
  | { type: 'FETCH_DETAILS'; payload: IMovieDetails }
  | { type: 'FETCH_TRENDING'; payload: Result[] }
  | { type: 'FETCH_QUERY'; payload: string }

// | { type: "FETCH_DETAILS"; payload: IDetails[] }
