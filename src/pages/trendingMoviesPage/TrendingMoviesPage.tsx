import { useEffect, useState } from 'react'
import MovieList from '../../components/movieList/MovieList'
import useMovies from '../../functions/Functions'
import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import type { Result } from '../../interfaces/ITrendingMovies'
import { Link } from 'react-router'
import SearchResults from '../../components/searchResults/SearchResults'

export default function TrendingMoviesPage() {
  const { trending, fetchDetailedMovie, searchResults, clickedOnSearchButton } =
    useMovies()
  const [moreMovies, setMoreMovies] = useState<IMovieDetails[]>([])

  // const searchInput = query.trim().length > 0

  useEffect(() => {
    async function loadDetails() {
      const show50Movies: Result[] = trending.slice(0, 50)

      // Nur Filme mit einer ID durchlassen
      const withId = show50Movies.filter(
        (m): m is Result & { id: number } => typeof m.id === 'number'
      )

      // Jetzt liefert Promise.all -> IMovieDetails[]
      const showMoreMovies = await Promise.all(
        withId.map((m) => fetchDetailedMovie(m.id))
      )

      setMoreMovies(showMoreMovies) // <-- passt jetzt zum State-Typ
    }

    if (trending.length > 0) {
      void loadDetails()
    }
  }, [trending, fetchDetailedMovie])

  return (
    <section className="px-6 ">
      {clickedOnSearchButton ? (
        <SearchResults results={searchResults} />
      ) : (
        <MovieList movies={moreMovies} title="Trending Movies" />
      )}
      <div className="mb-4">
        <Link to={`/`} className=" py-1 flex items-center gap-2 !no-underline">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{' '}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">
            Back
          </p>
        </Link>
      </div>
    </section>
  )
}
