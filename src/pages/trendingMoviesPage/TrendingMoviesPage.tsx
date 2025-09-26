import { useEffect, useState } from 'react'
import MovieList from '../../components/movieList/MovieList'
import useMovies from '../../functions/Functions'
import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import type { Result } from '../../interfaces/ITrendingMovies'
import SearchResults from '../../components/searchResults/SearchResults'

export default function TrendingMoviesPage() {
  const { trending, fetchDetailedMovie, searchResults, clickedOnSearchButton } =
    useMovies()
  const [moreMovies, setMoreMovies] = useState<IMovieDetails[]>([])

  // const searchInput = query.trim().length > 0

  useEffect(() => {
    async function loadDetails() {
      const show50Movies: Result[] = trending.slice(0, 50)

      const withId = show50Movies.filter(
        (m): m is Result & { id: number } => typeof m.id === 'number'
      )

      const showMoreMovies = await Promise.all(
        withId.map((m) => fetchDetailedMovie(m.id))
      )

      const notUndefinedMovies = showMoreMovies.filter(
        (m): m is IMovieDetails => m !== undefined
      )

      setMoreMovies(notUndefinedMovies)
    }

    loadDetails()
  }, [trending])

  return (
    <section className="px-6 ">
      {clickedOnSearchButton ? (
        <SearchResults results={searchResults} />
      ) : (
        <MovieList movies={moreMovies} />
      )}
    </section>
  )
}
