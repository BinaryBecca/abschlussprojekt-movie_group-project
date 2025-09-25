import { Link } from 'react-router'
import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import NavButton from '../navButton/NavButton'
import type { Result } from '../../interfaces/ITrendingMovies'
import useMovies from '../../functions/Functions'

interface MovieCarouselCardProps {
  movie: IMovieDetails | Result
}

// Type Guard: ist es ein IMovieDetails-Objekt?
function isDetails(m: IMovieDetails | Result): m is IMovieDetails {
  return Array.isArray((m as IMovieDetails).genres)
}

export default function MovieCard({ movie }: MovieCarouselCardProps) {
  const { genres } = useMovies()
  const id = movie.id
  const title = movie.title
  const posterPath = movie.poster_path
  const year = movie.release_date ? movie.release_date.slice(0, 4) : ''
  const genreNames = isDetails(movie)
    ? movie.genres.map((g) => g.name).join(' | ')
    : movie.genre_ids
        ?.map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .join(' | ') || ''
  // Laufzeit (nur bei Details vorhanden)
  const runtime = isDetails(movie) ? movie.runtime : undefined
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/'
  const frontImg = IMG_URL + movie.poster_path

  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <section className=" border border-white m-5">
      <div className="grid grid-cols-[1fr_2fr] p-5 items-center">
        <Link to={`/details/${id}`}>
          <img
            className="rounded-4xl h-auto max-h-[20em]"
            src={frontImg}
            alt={title}
          />
        </Link>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-2xl font-bold">{title}</h4>
            <NavButton
              link="/favorites"
              img="/icon_download.svg"
              className=""
              classNameImg="h-8"
            />
          </div>

          <div className="flex flex-row justify-between items-center font-light">
            <p>⭐ {roundedVoteAverage}</p>
            {year && <p>● {year}</p>}
            {genreNames && <p>● {genreNames}</p>}
            {runtime !== undefined && <p>● {runtime} min</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
