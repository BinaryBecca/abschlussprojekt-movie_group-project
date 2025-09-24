import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useMovies from '../../functions/Functions'

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>()
  const {
    fetchDetailedMovie,
    fetchMovieVideos,
    details,
    videos,
    loading,
    error,
  } = useMovies()
  // Hook um Trailer im Popup zu steuern
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    if (!id) return
    const num = Number(id)
    void fetchDetailedMovie(num)
    void fetchMovieVideos(num)
  }, [id])

  const trailer = videos.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  )
  // wenn es einen Trailer gibt, bauen wir daraus die richtige Embed-URL
  // wichtig: wir benutzen "youtube-nocookie.com/embed", nicht "watch?v="
  // sonst blockt YouTube die Verbindung
  const embedUrl = trailer
    ? `https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&modestbranding=1`
    : null

  if (loading && !details) return <div>Lade Details...</div>
  if (error) return <div className="text-red-600">{error}</div>
  if (!details) return <div>Keine Details gefunden.</div>

  return (
    <article className="p-4 grid gap-4 md:grid-cols-[200px,1fr]">
      <img
        src={
          details.poster_path
            ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
            : '/img/placeholder.jpg'
        }
        alt={details.title}
        className="w-48 rounded"
      />
      <div>
        <h1 className="text-2xl font-bold">{details.title}</h1>
        {details.tagline && (
          <p className="italic opacity-80">{details.tagline}</p>
        )}
        <p className="mt-2">{details.overview}</p>

        {embedUrl && (
          // wenn wir einen Trailer gefunden haben, zeigen wir den Button an
          <button
            onClick={() => setShowTrailer(true)}
            className="mt-4 px-4 py-2 rounded bg-red-600 text-white"
          >
            🎬 Trailer ansehen
          </button>
        )}
      </div>

      {/* Modal für Trailer */}
      {showTrailer && embedUrl && (
        // wenn showTrailer = true ist UND ein Trailer existiert,
        // bauen wir ein schwarzes Overlay (fixed, volle Bildschirmgröße)
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
            {/* hier wird der Trailer als YouTube-iframe eingebettet */}
            <iframe
              src={embedUrl}
              title="Trailer"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <button
              onClick={() => setShowTrailer(false)} // schließt den Trailer wieder
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </article>
  )
}
