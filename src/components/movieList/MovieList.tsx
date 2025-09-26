import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import MovieCard from '../movieCard/MovieCard'
import BackButton from '../backButton/BackButton'

interface MovieListProps {
  movies: IMovieDetails[]
  title?: string
}

export default function MovieList({
  movies,
  title = 'Movies',
}: MovieListProps) {
  // ? Crash vermeiden wenn movies nicht gesetzt ist
  const safeMovies = Array.isArray(movies)
    ? movies.filter((m): m is IMovieDetails => !!m && typeof m.id === 'number')
    : []

  return (
    <>
      <section className="px-6">
        <BackButton />
        {title && (
          <div className="mb-4">
            <h1>{title}</h1>
          </div>
        )}
        {safeMovies.length === 0 ? (
          <p>Keine Filme gefunden.</p>
        ) : (
          <ul className="list-none p-0">
            {safeMovies.map((movie) => {
              return (
                <li key={movie.id} className="">
                  <MovieCard movie={movie} />
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </>
  )
}
