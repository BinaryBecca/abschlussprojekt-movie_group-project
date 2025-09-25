import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import type { Result } from '../../interfaces/ITrendingMovies'
import MovieCard from '../movieCard/MovieCard'

interface MovieListProps {
  movies: Result[]
  title?: string
}

export default function MovieList({
  movies,
  title = 'Movies',
}: MovieListProps) {
  return (
    <>
      <div>
        <h5>{title}</h5>
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
