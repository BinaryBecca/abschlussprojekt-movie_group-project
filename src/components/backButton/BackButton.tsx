// src/components/navigation/BackButton.tsx
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'
import useMovies from '../../functions/Functions'

type BackButtonProps = {
  // * Route
  to?: string
  // * Labeltext
  label?: string
  // * Iconpfad
  iconSrc?: string
  // * Zusätzliche Klassen für den Button
  className?: string
  // * Search-UI schließen
  resetSearch?: boolean
}

export default function BackButton({
  to,
  label = 'Back',
  iconSrc = '/img/icon_arrow.svg',
  className = 'py-1 flex items-center gap-2 !no-underline mb-3',
  resetSearch = false,
}: BackButtonProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { setClickedOnSearchButton, setQuery } = useMovies()

  const handleClick = useCallback(() => {
    if (resetSearch) {
      setClickedOnSearchButton(false)
      setQuery?.('')
    }
    if (to) {
      navigate(to)
      return
    }
    // Wenn wir nicht auf "/" sind normal zurück navigieren
    if (location.pathname !== '/') {
      navigate(-1)
      return
    }
  }, [
    resetSearch,
    to,
    navigate,
    location.pathname,
    setClickedOnSearchButton,
    setQuery,
  ])

  return (
    <button type="button" onClick={handleClick} className={className}>
      <img src={iconSrc} alt="Icon Arrow" className="w-4  " />
      <p className="text-green size-1 text-[1.1rem] hover:text-lightgreen flex ">
        {label}
      </p>
    </button>
  )
}
