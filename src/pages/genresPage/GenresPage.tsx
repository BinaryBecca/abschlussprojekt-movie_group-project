// src/pages/genresPage/GenresPage.tsx
import { useEffect } from "react"
import { useParams } from "react-router"
import useMovies from "../../functions/Functions"
import MovieList from "../../components/movieList/MovieList"
import SearchResults from "../../components/searchResults/SearchResults"

export default function GenresPage() {
  const { genreId } = useParams<{ genreId: string }>()
  const {
    fetchMoviesByGenre,
    trending,
    searchResults,
    clickedOnSearchButton,
    setClickedOnSearchButton,
    loading,
    error,
    genres,
  } = useMovies()

  useEffect(() => {
    setClickedOnSearchButton(false)
    if (genreId) void fetchMoviesByGenre(Number(genreId), 1)
  }, [genreId])

  const genreName = genres.find((g) => g.id === Number(genreId))?.name ?? "Unknown"

  if (loading && trending.length === 0) return <div>Lade Kategorie…</div>
  if (error) return <div className="text-red-600">{error}</div>

  return (
    <section className="p-4">
      {clickedOnSearchButton ? (
        <SearchResults results={searchResults} />
      ) : trending.length === 0 ? (
        <div>Keine Filme gefunden.</div>
      ) : (
        <MovieList movies={trending} title={`Everything in ${genreName}`} />
      )}
    </section>
  )
}
