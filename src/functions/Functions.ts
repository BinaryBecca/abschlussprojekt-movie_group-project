import { useContext } from "react"
import { mainContext } from "../context/MainProvider"
import type { IState, TAction } from "../interfaces/ProviderInterfaces"

export default function useMovies() {
  const context = useContext(mainContext)
  if (!context) throw new Error("Sorry, useContext is not working.")
  return context
}

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null }
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payloud }
    case "FETCH_GENRES":
      return { ...state, loading: false, genres: action.payloud }
    case "FETCH_TRENDING":
      return { ...state, loading: false, trending: action.payloud }
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
  trending: [],
  // details: []
}
