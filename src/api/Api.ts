import axios from 'axios'
import type { IGenres } from '../interfaces/IGenres'
import type { ITrendingMovies } from '../interfaces/ITrendingMovies'
import type { IMovieDetails } from '../interfaces/IMovieDetails'
import type { IVideo } from '../interfaces/IVideo'

const myAPI = import.meta.env.VITE_apiKey

export const api = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

export async function getDetailedMovie(id: number) {
  const { data } = await api.get<IMovieDetails>(
    `https://api.themoviedb.org/3/movie/${id}`,
    { params: { api_key: myAPI } }
  )
  return data
}

export async function getGenres() {
  const { data } = await api.get<IGenres>('/genre/movie/list', {
    params: { api_key: myAPI },
  })
  return data
}

export async function filterTrendingMoviesByGenres(gendreId: number) {
  const { data } = await api.get<ITrendingMovies>(`/trending/movie/day`, {
    params: { api_key: myAPI, with_genres: gendreId },
  })
  return data
}

export async function getTrendingMoviesByGenres() {
  const { data } = await api.get<ITrendingMovies>(
    `/trending/movie/day?api_key=${myAPI}`
  )
  return data
}

export async function getMovieVideos(id: number) {
  const { data } = await api.get(`/movie/${id}/videos`, {
    params: { api_key: myAPI, language: 'en-us' },
  })
  return data.results as IVideo[]
}

export async function searchMovies(name: string) {
  const { data } = await api.get<ITrendingMovies>(
    `/search/movie?api_key=${myAPI}`,
    {
      params: { query: name },
    }
  )
  return data
}
