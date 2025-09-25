import { Link } from "react-router"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"
import NavButton from "../navButton/NavButton"

interface MovieCarouselCardProps {
  movie: IMovieDetails
}

export default function MovieCard({ movie }: MovieCarouselCardProps) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/"
  const frontImg = IMG_URL + movie.poster_path

  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <section className=" border border-white m-5">
      <div className="grid grid-cols-[1fr_2fr] p-5 items-center">
        <Link to={`/details/${movie.id}`}>
          <img className="rounded-4xl h-auto max-h-[20em]" src={frontImg} alt={movie.title} />
        </Link>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-2xl font-bold">{movie.title}</h4>
            <NavButton link="/favorites" img="/img/icon_favorites.svg" className="" classNameImg="h-8" />
          </div>

          <div className="flex flex-row justify-between items-center font-light">
            <p>⭐ {roundedVoteAverage} </p>
            <p>●</p>
            <p>{movie.release_date.slice(0, 4)}</p>
            <p>●</p>
            <div className="flex flex-row">
              <p>{movie.genres?.map((genre) => genre.name).join(" | ")}</p>
            </div>
            <p>●</p>
            <p>{movie.runtime} min</p>
          </div>
        </div>
      </div>
    </section>
  )
}
