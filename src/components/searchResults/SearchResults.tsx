import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import type { Result } from '../../interfaces/ITrendingMovies'
import MovieCard from '../movieCard/MovieCard'

interface SearchResultsProps {
  results: (Result | IMovieDetails)[]
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
