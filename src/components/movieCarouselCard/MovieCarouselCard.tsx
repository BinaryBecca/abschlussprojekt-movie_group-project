import type { Result } from "../../interfaces/ITrendingMovies"

interface MovieCarouselCardProps {
  movie: Result
}

export default function MovieCarouselCard({ movie }: MovieCarouselCardProps) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/"
  const backImg = IMG_URL + movie.backdrop_path
  // const frontImg = IMG_URL + movie.poster_path

  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <div
      className="relative flex items-center justify-center py-30 rounded-4xl bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${backImg})` }}>
      <div className="absolute h-full w-full bg-black/30"></div>
      <div className="absolute bottom-1.5 justify-center z-20 text-white text-center">
        <h4 className="text-2xl font-bold">{movie.title}</h4>
        <p className="font-light">⭐ {roundedVoteAverage}/ 10.0</p>
      </div>
    </div>
  )
}
