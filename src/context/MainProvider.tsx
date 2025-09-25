import React, { createContext, useEffect, useMemo, useReducer, useState } from "react"
import {
  getGenres,
  filterTrendingMoviesByGenres,
  searchMovies,
  getTrendingMoviesByGenres,
  getDetailedMovie,
  getMovieVideos,
} from "../api/Api"
import type { IState } from "../interfaces/ProviderInterfaces"
import { initialState, reducer } from "../functions/Functions"
import type { IMovieDetails } from "../interfaces/IMovieDetails"

export interface MainProviderProps extends IState {
  fetchGenreNavBar: () => Promise<void>
  fetchDetailedMovie: (id: number) => Promise<IMovieDetails | undefined>
  fetchGenreByTrend: (genreId: number) => Promise<void>
  fetchTrendingMovies: () => Promise<void>
  searchMovieByName: (name: string) => Promise<void>
  setQuery: (query: string) => void
  fetchMovieVideos: (id: number) => Promise<void>
  setSearch: React.Dispatch<React.SetStateAction<string>>
  search: string

  setDisplayScreen: React.Dispatch<React.SetStateAction<"loading" | "start" | "home">>
  displayScreen: "loading" | "start" | "home"
  setClickedOnSearchButton: React.Dispatch<React.SetStateAction<boolean>>
  clickedOnSearchButton: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | undefined>(undefined)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [states, dispatch] = useReducer(reducer, initialState)
  const [search, setSearch] = useState<string>("")

  const [displayScreen, setDisplayScreen] = useState<"loading" | "start" | "home">("loading")
  const [clickedOnSearchButton, setClickedOnSearchButton] = useState<boolean>(false)

  // ? Fetch Genre NavBar
  async function fetchGenreNavBar() {
    dispatch({ type: "FETCH_START" })
    try {
      // ! getGenres function stammt aus Api.ts
      const data = await getGenres()
      // ! Wenn data.genres null oder undefined ist dann leeres Array
      dispatch({ type: "FETCH_GENRES", payload: data.genres ?? [] })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err?.message ?? "Fehler beim Laden der Genres",
      })
    }
  }

  // ? Fetch Movie Videos
  async function fetchMovieVideos(id: number) {
    dispatch({ type: "FETCH_START" })
    try {
      const videos = await getMovieVideos(id)
      dispatch({ type: "FETCH_VIDEOS", payload: videos })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message ?? "Fehler beim Laden der Videos",
      })
    }
  }

  async function fetchDetailedMovie(id: number) {
    dispatch({ type: "FETCH_START" })
    try {
      const data = await getDetailedMovie(id)
      dispatch({ type: "FETCH_DETAILS", payload: data })
      return data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err?.message ?? "Fehler beim Laden der Details",
      })
    }
  }

  async function fetchGenreByTrend(genreId: number) {
    dispatch({ type: "FETCH_START" })
    try {
      // ! getTrendingMoviesByGenres function stammt aus Api.ts
      const data = await filterTrendingMoviesByGenres(genreId)

      const filtered = data.results?.filter((m) => (Array.isArray(m.genre_ids) && m.genre_ids.includes(genreId)) ?? [])

      const detailedFiltered = await Promise.all(filtered.map((movie) => getDetailedMovie(movie.id)))

      dispatch({ type: "FETCH_TRENDING", payload: detailedFiltered })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err?.message ?? "Fehler beim Laden der GenreIDS",
      })
    }
  }

  // ? Fetch Trending Movies
  async function fetchTrendingMovies() {
    dispatch({ type: "FETCH_START" })
    try {
      const data = await getTrendingMoviesByGenres()
      const results = data.results ?? []

      const detailResults = await Promise.all(results.map((movie) => getDetailedMovie(movie.id)))

      dispatch({ type: "FETCH_TRENDING", payload: detailResults })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    setClickedOnSearchButton(true)

    try {
      const data = await searchMovies(name)
      console.log("data", data)
      const results = data.results ?? []
      // # typescript Fejlermeldung fixen!
      // für jedes Suchergebnis Details
      const detailResults = await Promise.all(results.map((movie) => getDetailedMovie(movie.id)))

      dispatch({ type: "FETCH_SEARCHRESULTS", payload: detailResults })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message ?? "Fehler bei der Suchanfrage.",
      })
    }
  }

  // ? Startscreen Loading Simluation
  useEffect(() => {
    if (displayScreen === "loading") {
      const timer = setTimeout(() => {
        setDisplayScreen("start")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [displayScreen])

  console.log(displayScreen)

  const value = useMemo<MainProviderProps>(
    () => ({
      ...states,
      fetchGenreNavBar,
      searchMovieByName,
      setQuery,
      fetchDetailedMovie,
      fetchTrendingMovies,
      setSearch,
      fetchGenreByTrend,
      setDisplayScreen,
      fetchMovieVideos,
      search,
      displayScreen,
      setClickedOnSearchButton,
      clickedOnSearchButton,
    }),
    [states, search, displayScreen, clickedOnSearchButton]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
