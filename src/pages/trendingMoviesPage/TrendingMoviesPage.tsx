import MovieList from "../../components/movieList/MovieList"
import useMovies from "../../functions/Functions"

export default function TrendingMoviesPage() {
  const { trending } = useMovies()

  return (
    <div>
      <MovieList movies={trending} />
    </div>
  )
}
