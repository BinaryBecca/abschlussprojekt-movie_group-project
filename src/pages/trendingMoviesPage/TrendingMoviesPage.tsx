import { useEffect, useState } from "react"
import MovieList from "../../components/movieList/MovieList"
import useMovies from "../../functions/Functions"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import type { Result } from "../../interfaces/ITrendingMovies"
import { Link } from "react-router"
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
    <div>
      {clickedOnSearchButton ? <SearchResults results={searchResults} /> : <MovieList movies={moreMovies} />}
      <div className="my-2">
        <Link to={`/`} className=" px-4 py-1 flex items-center gap-2 !no-underline">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{" "}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">Back</p>
        </Link>
      </div>
    </div>
  )
}
