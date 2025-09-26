import { Link } from "react-router"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import type { Result } from "../../interfaces/ITrendingMovies"
import MovieCard from "../movieCard/MovieCard"

interface SearchResultsProps {
  results: IMovieDetails[]
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <>
      <section className="px-6">
        <Link to={`/`} className=" py-1 flex items-center gap-2 !no-underline mb-3">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{" "}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">Back</p>
        </Link>
        <div className="flex flex-col gap-5">
          {results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })}
        </div>
      </section>
    </>
  )
}
