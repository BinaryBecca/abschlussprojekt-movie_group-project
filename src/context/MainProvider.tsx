import React, { createContext, useMemo, useReducer, useState } from 'react'
import {
  getGenres,
  filterTrendingMoviesByGenres,
  searchMovies,
  getTrendingMoviesByGenres,
} from '../api/Api'
import type { IState } from '../interfaces/ProviderInterfaces'
import { initialState, reducer } from '../functions/Functions'
import type { Result } from '../interfaces/ITrendingMovies'

export interface MainProviderProps extends IState {
  fetchGenreNavBar: () => Promise<void>
  fetchGenreByTrend: (genreId: number) => Promise<void>
  fetchTrendingMovies: () => Promise<void>
  searchMovieByName: (name: string) => Promise<void>
  setQuery: (query: string) => void
  setSearch: React.Dispatch<React.SetStateAction<string>>
  search: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | undefined>(
  undefined
)

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [states, dispatch] = useReducer(reducer, initialState)
  const [search, setSearch] = useState<string>('')

  // ? Fetch Genre NavBar
  async function fetchGenreNavBar() {
    dispatch({ type: 'FETCH_START' })
    try {
      // ! getGenres function stammt aus Api.ts
      const data = await getGenres()
      // ! Wenn data.genres null oder undefined ist dann leeres Array
      dispatch({ type: 'FETCH_GENRES', payload: data.genres ?? [] })
    } catch (err: any) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err?.message ?? 'Fehler beim Laden der Genres',
      })
    }
  }

  async function fetchGenreByTrend(genreId: number) {
    dispatch({ type: 'FETCH_START' })
    try {
      // ! getTrendingMoviesByGenres function stammt aus Api.ts
      const data = await filterTrendingMoviesByGenres(genreId)

      const filtered = data.results?.filter(
        (m) =>
          (Array.isArray(m.genre_ids) && m.genre_ids.includes(genreId)) ?? []
      )

      dispatch({ type: 'FETCH_TRENDING', payload: filtered })
    } catch (err: any) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err?.message ?? 'Fehler beim Laden der GenreIDS',
      })
    }
  }

  // ? Fetch Trending Movies
  async function fetchTrendingMovies() {
    dispatch({ type: 'FETCH_START' })
    try {
      const data = await getTrendingMoviesByGenres()
      dispatch({ type: 'FETCH_TRENDING', payload: data.results ?? [] })
    } catch (err: any) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err?.message ?? 'Fehler beim Laden der Genres',
      })
    }
  }

  function setQuery(query: string) {
    dispatch({ type: 'FETCH_QUERY', payload: query })
  }

  // ? Fetch Search
  async function searchMovieByName(name: string) {
    dispatch({ type: 'FETCH_START' })
    dispatch({ type: 'FETCH_QUERY', payload: name })
    try {
      const data = await searchMovies(name)
      const slim: Result[] =
        data.results?.map((movie: any) => ({
          poster_path: movie.poster_path,
          title: movie.title,
          vote_average: movie.vote_average,
          release_date: movie.release_date,
          genre_ids: movie.genre_ids,
        })) ?? []
      dispatch({ type: 'FETCH_TRENDING', payload: slim })
    } catch (error: any) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: error.message ?? 'Fehler bei der Suchanfrage.',
      })
    }
  }

  const value = useMemo<MainProviderProps>(
    () => ({
      ...states,
      fetchGenreNavBar,
      searchMovieByName,
      setQuery,
      fetchTrendingMovies,
      setSearch,
      fetchGenreByTrend,
      search,
    }),
    [states, search]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
