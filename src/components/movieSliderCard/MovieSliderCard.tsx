import type { Result } from "../../interfaces/ITrendingMovies"

interface MovieSliderCardProps {
  movie: Result
}

export default function MovieSliderCard({ movie }: MovieSliderCardProps) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/"
  const backImg = IMG_URL + movie.backdrop_path
  // const frontImg = IMG_URL + movie.poster_path

  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <div
      className="relative flex items-center justify-center px-30 py-10 rounded-4xl bg-cover bg-center bg-no-repeat overflow-hidden "
      style={{ backgroundImage: `url(${backImg})` }}>
      <div className="absolute h-full w-full bg-black/30"></div>
      <div className="z-20 text-white text-2xl font-bold">
        <h4>{movie.title}</h4>
        <p>⭐ {roundedVoteAverage}/ 10.0</p>
      </div>
    </div>
  )
}
