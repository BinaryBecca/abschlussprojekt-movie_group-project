import { Link } from "react-router"
import type { Result } from "../../interfaces/ITrendingMovies"
import { Carousel } from "react-bootstrap"

interface MovieCarouselCardProps {
  movie: Result
}

export default function MovieSliderCard({ movie }: MovieCarouselCardProps) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/"
  const backImg = IMG_URL + movie.backdrop_path
  // const frontImg = IMG_URL + movie.poster_path

  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <Link
      to={`details/${movie.id}`}
      className="relative flex items-center justify-center px-30 py-10 rounded-4xl bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${backImg})` }}>
      <div className="absolute h-full w-full bg-black/30"></div>

      {/* Carousel.Caption ergänzen! */}
      <div className="absolute bottom-1.5 justify-center z-20 text-white text-center">
        <h4 className="text-2xl font-bold">{movie.title}</h4>
        <p className="font-light">⭐ {roundedVoteAverage}/ 10.0</p>
      </div>
    </Link>
  )
}
