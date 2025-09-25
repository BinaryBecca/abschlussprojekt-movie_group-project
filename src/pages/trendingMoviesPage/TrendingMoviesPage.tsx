import { useEffect, useState } from "react"
import MovieList from "../../components/movieList/MovieList"
import useMovies from "../../functions/Functions"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import type { Result } from "../../interfaces/ITrendingMovies"
import { Link } from "react-router"

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
      <div className="my-2">
        <Link to={`/`} className=" px-4 py-1 flex items-center gap-2 !no-underline">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{" "}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">Back</p>
        </Link>
      </div>
      <MovieList movies={moreMovies} />
    </div>
  )
}
