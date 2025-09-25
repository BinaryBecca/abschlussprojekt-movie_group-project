import { useEffect, useState } from "react"
import MovieList from "../../components/movieList/MovieList"
import useMovies from "../../functions/Functions"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import type { Result } from "../../interfaces/ITrendingMovies"

export default function TrendingMoviesPage() {
  const { trending, fetchDetailedMovie } = useMovies()
  const [moreMovies, setMoreMovies] = useState<IMovieDetails[]>([])

  useEffect(() => {
    async function loadDetails() {
      const show50Movies: Result[] = trending.slice(0, 50)
      const showMoreMovies = await Promise.all(
        show50Movies.map((movie: Result) => {
          if (movie.id) {
            return fetchDetailedMovie(movie.id)
          } else {
            return null
          }
        })
      )
      setMoreMovies(showMoreMovies)
    }

    loadDetails()
  }, [trending])

  return (
    <div>
      <MovieList movies={moreMovies} />
    </div>
  )
}
