import { createContext, useMemo, useReducer } from "react"
import { initialState, reducer } from "../functions/Functions"
import type { IState } from "../interfaces/ProviderInterfaces"

// TODO Fetch-Funktionen mit dispatch ergänzen

export interface MainProviderProps extends IState {
  // Hier kommen die Funktionsnamen rein um sie im Router weiterzuvergeben
}

export const mainContext = createContext<MainProviderProps | undefined>(undefined)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [states, dispatch] = useReducer(reducer, initialState)

  // -----------------------------------------

  // Hier useEffects u. Fetching-Funktionen platzieren

  // -----------------------------------------h

  const value = useMemo<MainProviderProps>(
    () => ({
      ...states,
      // Hier wieder alle Funktionsnamen auflisten, die im Router übergeben werden dürfen
    }),
    [states]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
