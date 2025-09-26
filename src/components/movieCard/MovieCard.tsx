import { Link } from "react-router"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import useMovies from "../../functions/Functions"

interface MovieCardProps {
  movie: IMovieDetails
}

export default function MovieCard({ movie }: MovieCardProps) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/"
  const frontImg = IMG_URL + movie.poster_path
  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  const { favorites, setFavorites } = useMovies()

  const isFavoriteClicked = favorites
  console.log("favorites", favorites)

  return (
    <section className="mb-4">
      <div className="flex items-start gap-4 w-full">
        <Link to={`/details/${movie.id}`}>
          <img className="rounded-[0.6rem] h-auto max-h-[10rem]" src={frontImg} alt={movie.title} />
        </Link>

        <div className="flex flex-col items-stretch justify-between gap-2 w-full">
          <div className="flex flex-row justify-between items-baseline">
            <h3 className="!text-[1.2rem] font-bold ">{movie.title}</h3>
            <button onClick={() => setFavorites(movie)}>
              <img
                src={isFavoriteClicked ? "/img/icon_favorites_active.svg" : "/img/icon_favorites.svg"}
                alt="favorite-icon"
                className="h-6"
              />
            </button>
            {/* /img/icon_favorites.svg */}
            {/* /img/icon_favorites_active.svg */}
          </div>

          <div className="flex flex-row justify-start  items-center gap-2 font-light text-[0.8rem]">
            <p className="tracking-wide">
              ⭐ {roundedVoteAverage} ● {movie.release_date.slice(0, 4)} ●{"  "}
              {movie.genres?.map((genre) => genre.name).join(" | ")} {"  "}● {movie.runtime}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
