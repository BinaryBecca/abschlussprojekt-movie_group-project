import { useContext } from 'react'
import { mainContext } from '../context/MainProvider'
import type { IState, TAction } from '../interfaces/ProviderInterfaces'

export default function useMovies() {
  const context = useContext(mainContext)
  if (!context) throw new Error('Sorry, useContext is not working.')
  return context
}

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'FETCH_GENRES':
      return { ...state, loading: false, genres: action.payload }
    case 'FETCH_TRENDING':
      return { ...state, loading: false, trending: action.payload }
    case 'FETCH_DETAILS':
      return { ...state, loading: false, details: action.payload }
    case 'FETCH_QUERY':
      return { ...state, query: action.payload }
    // case "FETCH_DETAILS":
    //   return { ...state, loading: false, details: action.payloud }
    default:
      return state
  }
}

export const initialState: IState = {
  loading: false,
  error: null,
  genres: [],
  details: null,
  trending: [],
  query: '',
  // details: []
}
