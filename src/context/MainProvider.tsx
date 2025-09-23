import React, { createContext, useMemo, useReducer, useState } from "react"
import { getGenres, searchMovies } from "../api/Api"
import type { IState } from "../interfaces/ProviderInterfaces"
import { initialState, reducer } from "../functions/Functions"
import type { Result } from "../interfaces/ITrendingMovies"

export interface MainProviderProps extends IState {
  fetchGenreNavBar: () => Promise<void>
  searchMovieByName: (name: string) => Promise<void>
  setQuery: (query: string) => void
  setSearch: React.Dispatch<React.SetStateAction<string>>
  search: string
}

export const mainContext = createContext<MainProviderProps | undefined>(undefined)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [states, dispatch] = useReducer(reducer, initialState)
  const [search, setSearch] = useState<string>("")

  // ? Fetch Genre NavBar
  async function fetchGenreNavBar() {
    dispatch({ type: "FETCH_START" })
    try {
      const data = await getGenres()
      // ! Wenn data.genres null oder undefined ist dann leeres Array
      dispatch({ type: "FETCH_GENRES", payload: data.genres ?? [] })
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err?.message ?? "Fehler beim Laden der Genres",
      })
    }
  }

  function setQuery(query: string) {
    dispatch({ type: "FETCH_QUERY", payload: query })
  }

  // ? Fetch Search
  async function searchMovieByName(name: string) {
    dispatch({ type: "FETCH_START" })
    dispatch({ type: "FETCH_QUERY", payload: name })
    try {
      const data = await searchMovies(name)
      const slim: Result[] =
        data.results?.map((movie: any) => ({
          poster_path: movie.poster_path,
          title: movie.title,
          vote_avarage: movie.vote_avarage,
          release_date: movie.release_date,
          genre_ids: movie.genre.ids,
        })) ?? []
      dispatch({ type: "FETCH_TRENDING", payload: slim })
    } catch (error: any) {
      dispatch({ type: "FETCH_ERROR", payload: error.message ?? "Fehler bei der Suchanfrage." })
    }
  }

  const value = useMemo<MainProviderProps>(
    () => ({
      ...states,
      fetchGenreNavBar,
      searchMovieByName,
      setQuery,
      setSearch,
      search,
    }),
    [states]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
