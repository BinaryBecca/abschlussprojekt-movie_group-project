import { useEffect } from "react"
import useMovies from "../../functions/Functions"
import MovieButton from "../movieButton/MovieButton"

export default function GenreBar() {
  const { genres, fetchGenreNavBar, fetchGenreByTrend, loading } = useMovies()

  // ! Genres laden nur einmal (wenn noch keine da sind)
  useEffect(() => {
    if (genres.length === 0) void fetchGenreNavBar()
  }, [genres.length, fetchGenreNavBar])

  if (loading && genres.length === 0) return <div>Lade Genres...</div>

  return (
    <div>
      {genres.map((g) => (
        <MovieButton key={g.id} genre={g.name} onClick={() => fetchGenreByTrend(g.id)} />
      ))}
    </div>
  )
}
