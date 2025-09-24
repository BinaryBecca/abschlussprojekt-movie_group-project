import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useGenres } from "../../functions/Functions"
import MovieButton from "../movieButton/MovieButton"

export default function GenreBar() {
  const { genreId } = useParams<{ genreId: string }>()
  const { genres, fetchGenreNavBar, fetchGenreByTrend, loading } = useGenres()

  // ! Genres laden nur einmal (wenn noch keine da sind)
  useEffect(() => {
    if (genres.length === 0) void fetchGenreNavBar()
  }, [genres.length, fetchGenreNavBar])

  if (loading && genres.length === 0) return <div>Lade Genres...</div>

  useEffect(() => {
    if (!genreId) return
    void fetchGenreByTrend(Number(genreId))
  }, [genreId])

  return (
    <div>
      {genres.map((g) => (
        <button key={g.id} onClick={() => fetchGenreByTrend(g.id)} title={g.name}>
          {g.name}
        </button>

        // <MovieButton
        //   key={g.id}
        //   // onClick={() => fetchGenreByTrend(g.id)}
        //   genre={g.name}
        //   link={`/${g.name}`}
        //   className=""
        // />
      ))}
    </div>
  )
}
