import React, { createContext, useMemo, useReducer } from 'react'
import { getGenres } from '../api/Api'
import type { IState } from '../interfaces/ProviderInterfaces'
import { initialState, reducer } from '../functions/Functions'

export interface MainProviderProps extends IState {
  fetchGenreNavBar: () => Promise<void>
}

export const mainContext = createContext<MainProviderProps | undefined>(
  undefined
)

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [states, dispatch] = useReducer(reducer, initialState)

  // ? Fetch Genre NavBar
  async function fetchGenreNavBar() {
    dispatch({ type: 'FETCH_START' })
    try {
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

  const value = useMemo<MainProviderProps>(
    () => ({
      ...states,
      fetchGenreNavBar,
    }),
    [states]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
