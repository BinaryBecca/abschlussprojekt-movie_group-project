import type { IMovieDetails } from "../../interfaces/IMovieDetails"

interface MovieCarouselCardProps {
  movie: IMovieDetails
}

export default function MovieCard({ movie }: MovieCarouselCardProps) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/"
  const frontImg = IMG_URL + movie.poster_path

  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <section>
      <img src={frontImg} alt={movie.title} />

      <div>
        <div>
          <h4 className="text-2xl font-bold">{movie.title}</h4>
        </div>
        <div>
          <p className="font-light">⭐ {roundedVoteAverage}/ 10.0</p>
          <p className="font-light">{movie.release_date}</p>
          {/* <p className="font-light">{movie.genres.name}</p> */}
          <p className="font-light">{movie.runtime} min</p>
        </div>
      </div>
    </section>
  )
}
