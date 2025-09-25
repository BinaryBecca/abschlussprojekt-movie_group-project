// src/pages/genresPage/GenresPage.tsx
import { useEffect } from 'react'
import { useParams } from 'react-router'
import useMovies from '../../functions/Functions'
import MovieCarousel from '../../components/movieCarousel/MovieCarousel'

export default function GenresPage() {
  const { genreId } = useParams<{ genreId: string }>()
  const { fetchMoviesByGenre, trending, loading, error } = useMovies()

  useEffect(() => {
    if (genreId) void fetchMoviesByGenre(Number(genreId), 1)
  }, [genreId])

  if (loading && trending.length === 0) return <div>Lade Kategorie…</div>
  if (error) return <div className="text-red-600">{error}</div>

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Genre: {genreId}</h2>
      {trending.length === 0 ? (
        <div>Keine Filme gefunden.</div>
      ) : (
        <MovieCarousel movies={trending} />
      )}
    </section>
  )
}
