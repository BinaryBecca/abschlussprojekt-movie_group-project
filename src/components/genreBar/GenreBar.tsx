import { useEffect } from 'react'
import useMovies from '../../functions/Functions'
import MovieButton from '../movieButton/MovieButton'
import type { Genre } from '../../interfaces/IGenres'

export default function GenreBar() {
  const { genres, fetchGenreNavBar, fetchGenreByTrend, loading } = useMovies()

  useEffect(() => {
    if (genres.length === 0) void fetchGenreNavBar()
  }, [genres.length, fetchGenreNavBar])

  if (loading && genres.length === 0) return <div>Lade Genres...</div>

  return (
    <div
      className="
        overflow-x-auto py-1
        px-2 md:pl-6
        [scrollbar-width:none]
      "
    >
      <div className="flex gap-2 py-2 whitespace-nowrap m-3">
        {genres.map((g: Genre) => (
          <MovieButton
            key={g.id}
            genre={g.name}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded shrink-0"
            onClick={() => fetchGenreByTrend(g.id)}
          />
        ))}
      </div>
    </div>
  )
}
