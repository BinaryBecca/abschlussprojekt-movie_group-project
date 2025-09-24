import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGenres } from '../../functions/Functions'

export default function GenreBar() {
  const { name } = useParams<{ name: string }>()
  const { genres, fetchGenreNavBar, fetchGenreByTrend, loading } = useGenres()

  // ! Genres laden nur einmal (wenn noch keine da sind)
  useEffect(() => {
    if (genres.length === 0) void fetchGenreNavBar()
  }, [genres.length, fetchGenreNavBar])

  if (loading && genres.length === 0) return <div>Lade Genres...</div>

  return (
    <div>
      {genres.map((g) => (
        <button
          key={g.id}
          onClick={() => fetchGenreByTrend(g.id)}
          title={g.name}
        >
          {g.name}
        </button>
      ))}
    </div>
  )
}
