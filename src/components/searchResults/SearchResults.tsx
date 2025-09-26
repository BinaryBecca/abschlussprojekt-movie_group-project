import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import MovieCard from "../movieCard/MovieCard"

interface SearchResultsProps {
  results: IMovieDetails[]
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="flex flex-col gap-5">
      {results.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}
