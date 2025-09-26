import { useNavigate } from "react-router"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import MovieCard from "../movieCard/MovieCard"

interface MovieListProps {
  movies: IMovieDetails[]
  title?: string
}

export default function MovieList({ movies, title = "Movies" }: MovieListProps) {
  const navigate = useNavigate()
  return (
    <>
      <section className="px-6">
        <button onClick={() => navigate(-1)} className=" py-1 flex items-center gap-2 !no-underline mb-3">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{" "}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">Back</p>
        </button>
        {title && (
          <div className="mb-4">
            <h1>{title}</h1>
          </div>
        )}
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
