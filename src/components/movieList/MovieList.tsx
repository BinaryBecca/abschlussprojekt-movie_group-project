import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import MovieCard from "../movieCard/MovieCard"

interface MovieListProps {
  movies: IMovieDetails[]
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <>
      <div>
        <h5>Trending Movies</h5>
      </div>

      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        )
      })}
    </>
  )
}
