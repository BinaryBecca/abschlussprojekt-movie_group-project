import type { Result } from "../../interfaces/ITrendingMovies"
import MovieCard from "../movieCard/MovieCard"
import MovieCarouselCard from "../movieCarouselCard/MovieCarouselCard"

interface SearchResultsProps {
  results: Result[]
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
