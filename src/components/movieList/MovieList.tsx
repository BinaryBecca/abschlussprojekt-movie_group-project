import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import MovieCard from "../movieCard/MovieCard"

interface MovieListProps {
  movies: IMovieDetails[]
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <>
      <section>
        <div className="mb-4">
          <h1>Trending Movies</h1>
        </div>
        <ul className="list-none p-0">
          {movies.map((movie) => {
            return (
              <li key={movie.id} className="">
                <MovieCard movie={movie} />
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
