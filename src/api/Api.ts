import axios from 'axios'
import React from 'react'
import type { IGenres } from '../interfaces/IGenres'
import type { ITrendingMovies } from '../interfaces/ITrendingMovies'

const myAPI = import.meta.env.VITE_apiKey

export const api = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

export async function getGenres() {
  const { data } = await api.get<IGenres>(`/genre/movie/list?api_key=${myAPI}`)
  return data
}

export async function getTrendingMoviesByGenres() {
  const { data } = await api.get<ITrendingMovies>(
    `https://api.themoviedb.org/3/trending/movie/day?${myAPI}`
  )
  return data
}
