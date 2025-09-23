import axios from 'axios'
import React from 'react'
import type { IGenres } from '../interfaces/IGenres'

export const api = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

export async function getGenres() {
  const { data } = await api.get<IGenres>(
    '/genre/movie/list?api_key=da558b609d9fc3db7bd0534a539f88c2'
  )
  return data
}
