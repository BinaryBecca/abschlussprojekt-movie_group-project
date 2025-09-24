import React, { useEffect } from 'react'
import useMovies from '../../functions/Functions'
import { useParams } from 'react-router'

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>()
  const { fetchDetailedMovie, details, loading, error } = useMovies()

  useEffect(() => {
    if (id) void fetchDetailedMovie(Number(id))
  }, [id])

  if (loading && !details) return <div>Lade Details...</div>
  if (error) return <div>{error}</div>
  if (!details) return <div>Keine Details gefunden.</div>

  const IMG = details.poster_path
    ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
    : '/img/placeholder.jpg'

  return (
    <article className="p-4 grid gap-4 md:grid-cols-[200px,1fr]">
      <img src={IMG} alt={details.title} className="w-48 rounded" />
      <div>
        <h1 className="text-2xl font-bold">{details.title}</h1>
        {details.tagline && (
          <p className="italic opacity-80">{details.tagline}</p>
        )}
        <p className="mt-2">{details.overview}</p>

        <ul className="mt-4 text-sm opacity-80 space-y-1">
          <li>
            <strong>Release:</strong> {details.release_date}
          </li>
          <li>
            <strong>Laufzeit:</strong> {details.runtime} min
          </li>
          <li>
            <strong>Score:</strong> {details.vote_average?.toFixed?.(1)}
          </li>
          <li>
            <strong>Genres:</strong>{' '}
            {details.genres.map((g) => g.name).join(', ')}
          </li>
        </ul>
      </div>
    </article>
  )
}
