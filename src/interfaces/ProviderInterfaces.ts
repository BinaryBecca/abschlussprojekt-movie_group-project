import type { Genre } from "./IGenres"
import type { Result } from "./ITrendingMovies"

// TODO API-Interfaces prüfen und ergänzen

export interface IState {
  loading: boolean
  error: string | null
  genres: Genre[]
  trending: Result[]
  // details: IDetails[]
}

export type TAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_ERROR"; payloud: string }
  | { type: "FETCH_GENRES"; payloud: Genre[] }
  | { type: "FETCH_TRENDING"; payloud: Result[] }
// | { type: "FETCH_DETAILS"; payloud: IDetails[] }
