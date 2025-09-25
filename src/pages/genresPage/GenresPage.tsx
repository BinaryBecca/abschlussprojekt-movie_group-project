// src/pages/genresPage/GenresPage.tsx
import { useEffect } from 'react'
import { useParams } from 'react-router'
import useMovies from '../../functions/Functions'
import MovieCarousel from '../../components/movieCarousel/MovieCarousel'
import MovieList from '../../components/movieList/MovieList'

export default function GenresPage() {
  const { genreId } = useParams<{ genreId: string }>()
  const { fetchMoviesByGenre, trending, loading, error, genres } = useMovies()

  useEffect(() => {
    if (genreId) void fetchMoviesByGenre(Number(genreId), 1)
  }, [genreId])

  const genreName =
    genres.find((g) => g.id === Number(genreId))?.name ?? 'Unknown'

  if (loading && trending.length === 0) return <div>Lade Kategorie…</div>
  if (error) return <div className="text-red-600">{error}</div>

  return (
    <section className="p-4">
      {trending.length === 0 ? (
        <div>Keine Filme gefunden.</div>
      ) : (
        <MovieList movies={trending} title={`Everything in ${genreName}`} />
      )}
    </section>
  )
}
