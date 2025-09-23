import React, { useEffect } from "react"
import useMovies from "../../functions/Functions"
import type { Result } from "../../interfaces/ITrendingMovies"

export default function TrendingMoviesPage() {
  const { fetchTrendingMovies, trending } = useMovies()

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  return (
    <div>
      <ul>
        {trending.map((movie: Result) => {
          return <li key={movie.id}>{movie.title}</li>
        })}
      </ul>
    </div>
  )
}
