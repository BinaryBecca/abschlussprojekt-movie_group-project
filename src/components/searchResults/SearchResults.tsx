import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import MovieCard from "../movieCard/MovieCard"
import BackButton from "../backButton/BackButton"

interface SearchResultsProps {
  results: IMovieDetails[]
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <>
      <section className="px-6">
        <BackButton resetSearch />
        <div className="flex flex-col gap-5">
          {/* Wenn User eingabe keine filme matched dann "Keine Filme gefunden" sonst Filmlist anzeigen */}
          {results.length === 0 ? (
            <p>Keine Filme gefunden.</p>
          ) : (
            results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          )}
        </div>
      </section>
    </>
  )
}
