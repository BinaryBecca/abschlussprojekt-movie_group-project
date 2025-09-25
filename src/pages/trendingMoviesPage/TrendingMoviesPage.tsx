import { useEffect, useState } from "react"
import MovieList from "../../components/movieList/MovieList"
import useMovies from "../../functions/Functions"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import type { Result } from "../../interfaces/ITrendingMovies"
import SearchResults from "../../components/searchResults/SearchResults"

export default function TrendingMoviesPage() {
  const { trending, fetchDetailedMovie, searchResults, clickedOnSearchButton } = useMovies()
  const [moreMovies, setMoreMovies] = useState<IMovieDetails[]>([])

  // const searchInput = query.trim().length > 0

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
      // # typescript Fejlermeldung fixen!
      setMoreMovies(showMoreMovies)
    }

    loadDetails()
  }, [trending])

  return (
    <div>{clickedOnSearchButton ? <SearchResults results={searchResults} /> : <MovieList movies={moreMovies} />}</div>
  )
}
