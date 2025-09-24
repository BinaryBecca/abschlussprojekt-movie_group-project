import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import {
  getGenres,
  filterTrendingMoviesByGenres,
  searchMovies,
  getTrendingMoviesByGenres,
  getDetailedMovie,
  getMovieVideos,
} from '../api/Api'
import type { IState } from '../interfaces/ProviderInterfaces'
import { initialState, reducer } from '../functions/Functions'
import type { Result } from '../interfaces/ITrendingMovies'
// TODO Infos in Component MovieCard umlagern

export interface MainProviderProps extends IState {
  fetchGenreNavBar: () => Promise<void>
  fetchDetailedMovie: (id: number) => Promise<void>
  fetchGenreByTrend: (genreId: number) => Promise<void>
  fetchTrendingMovies: () => Promise<void>
  searchMovieByName: (name: string) => Promise<void>
  setQuery: (query: string) => void
  fetchMovieVideos: (id: number) => Promise<void>
  setSearch: React.Dispatch<React.SetStateAction<string>>
  search: string
  loader: boolean
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
  const [loader, setLoader] = useState<boolean>(true)

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

  // ? Fetch Movie Videos
  async function fetchMovieVideos(id: number) {
    dispatch({ type: 'FETCH_START' })
    try {
      const videos = await getMovieVideos(id)
      dispatch({ type: 'FETCH_VIDEOS', payload: videos })
    } catch (err: any) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.message ?? 'Fehler beim Laden der Videos',
      })
    }
  }

  async function fetchDetailedMovie(id: number) {
    dispatch({ type: 'FETCH_START' })
    try {
      const data = await getDetailedMovie(id)
      dispatch({ type: 'FETCH_DETAILS', payload: data })
    } catch (err: any) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err?.message ?? 'Fehler beim Laden der Details',
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

          // ! In MovieCard umlagern
          // <div>
          //   <img src={movie.poster_path} alt={movie.title} />
          //   <h3>{movie.title}</h3>
          //   <p>{movie.vote_average}</p>
          //   <p>{movie.release_date}</p>
          //   <p>{movie.genre_ids[0]}</p>
          // </div>
          // const IMG_URL = "https://image.tmdb.org/t/p/w500/"
          // const frontImg = IMG_URL + movie.poster_path
        })) ?? []
      dispatch({ type: 'FETCH_SEARCHRESULTS', payload: slim })
      console.log(slim)
    } catch (error: any) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: error.message ?? 'Fehler bei der Suchanfrage.',
      })
    }
  }

  // ? Startscreen Loading Simluation

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

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
      fetchMovieVideos,
      search,
      loader,
    }),
    [states, search, loader]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
