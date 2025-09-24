import axios from 'axios'
import type { IGenres } from '../interfaces/IGenres'
import type { ITrendingMovies, Result } from '../interfaces/ITrendingMovies'

const myAPI = import.meta.env.VITE_apiKey

export const api = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

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

export async function searchMovies(name: string) {
  const { data } = await api.get<ITrendingMovies>('/trending/movie/day/', {
    params: { i: id },
  })
}
