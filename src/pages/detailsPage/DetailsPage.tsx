import { useEffect, useState } from "react"
import { useParams } from "react-router"
import useMovies from "../../functions/Functions"
import TrailerModal from "../../components/trailer/TrailerModal"
import MovieButton from "../../components/movieButton/MovieButton"
import BackButton from "../../components/backButton/BackButton"

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>()
  const { fetchDetailedMovie, fetchMovieVideos, details, videos, loading, error } = useMovies()

  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    if (!id) return
    const num = Number(id)
    void fetchDetailedMovie(num)
    void fetchMovieVideos(num)
  }, [id])

  const ytVideos = Array.isArray(videos) ? videos.filter((v) => v.site === "YouTube") : []

  const trailer =
    ytVideos.find((v) => v.type === "Trailer" && v.official) ||
    ytVideos.find((v) => v.type === "Trailer") ||
    ytVideos[0] // Fallback: erstes YouTube-Video

  const embedUrl = trailer ? `https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&modestbranding=1` : null

  if (loading && !details) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="loading" />
      </div>
    )
  }
  if (error) return <div className="text-red-500 p-4">{error}</div>
  if (!details) return <div className="p-4">Keine Details gefunden.</div>

  return (
    <article className="min-h-100vh">
      <div className="mx-auto w-full max-w-md px-5 flex flex-col gap-4">
        <BackButton />
        {/* Poster-Card */}
        <img
          src={details.poster_path ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : "/img/placeholder.jpg"}
          alt={details.title}
          className="rounded-2xl"
        />
        {/* Title */}
        <h1 className="text-center ">{details.title}</h1>

        {/* Eckdaten */}
        <div>
          <ul className="flex justify-center items-center !pl-0  ">
            {details.release_date && (
              <li className="after:mx-4 after:inline-block after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-mediumgrey last:after:hidden">
                {details.release_date.slice(0, 4)}
              </li>
            )}
            {details.genres?.[0]?.name && (
              <li className="after:mx-4 after:inline-block after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-mediumgrey last:after:hidden">
                {details.genres[0].name}
              </li>
            )}
            {details.runtime ? (
              <li>
                {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
              </li>
            ) : null}
          </ul>
          <div className=" flex items-center justify-center pr-8">
            <img src="/img/icon_star.png" className="pr-2" />

            {typeof details.vote_average === "number" && (
              <li className="list-none pt-1">{details.vote_average.toFixed(1)}</li>
            )}
          </div>
        </div>

        {/* Overview */}
        <p className=" ">{details.overview}</p>
        <div className="mx-auto w-full   pb-24">
          {embedUrl && (
            <MovieButton
              text="Watch Trailer"
              onClick={() => setShowTrailer(true)}
              className="
              w-full mt-6 rounded-full
              bg-gradient-to-r from-green to-lightgreen
              font-button   py-3
              hover:opacity-60 active:translate-y-[1px] transition
            "
            />
          )}
        </div>
      </div>

      <TrailerModal open={showTrailer} embedUrl={embedUrl} onClose={() => setShowTrailer(false)} />
    </article>
  )
}
