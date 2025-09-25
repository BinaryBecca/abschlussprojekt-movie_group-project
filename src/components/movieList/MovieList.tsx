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
      <section>
        {title && (
          <div className="mb-4">
            <h1>{title}</h1>
          </div>
        )}
        <ul className="list-none p-0">
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
