import type { Genre, IGenres } from './IGenres'

export interface IState {
  genre: Genre[]
}

export type TAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'FETCH_GENRES'; payload: Genre[] }
