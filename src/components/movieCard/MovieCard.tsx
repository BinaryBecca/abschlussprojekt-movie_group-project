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
  // ? Gemeinsame Felder für IMovieDetails und Result
  const id = movie.id
  const title = movie.title
  const posterPath = movie.poster_path
  const year = movie.release_date ? movie.release_date.slice(0, 4) : ''

  // ? Genres als Text (Details: Namen vorhanden, sonst via genre_ids auflösen)
  const genreNames = isDetails(movie)
    ? movie.genres.map((g) => g.name).join(' | ')
    : movie.genre_ids
        ?.map((gid) => genres.find((g) => g.id === gid)?.name)
        .filter(Boolean)
        .join(' | ') || ''

  // Laufzeit
  const runtime = isDetails(movie) ? movie.runtime : undefined

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/'
  const frontImg = IMG_URL + movie.poster_path

  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <section className="mb-4">
      <div className="flex items-start gap-4 w-full">
        <Link to={`/details/${movie.id}`}>
          <img
            className="rounded-[0.6rem] h-auto max-h-[10rem]"
            src={frontImg}
            alt={title}
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src =
                '/img/placeholder.jpg'
            }}
          />
        </Link>

        <div className="flex flex-col items-stretch justify-between gap-2 w-full">
          <div className="flex flex-row justify-between items-baseline">
            <h3 className="!text-[1.2rem] font-bold ">{title}</h3>
            <NavButton
              link="/favorite"
              img="/img/icon_favorites.svg"
              className=""
              classNameImg="h-6"
            />
          </div>

          <div className="flex flex-row justify-start  items-center gap-2 font-light text-[0.8rem]">
            <p className="tracking-wide">
              ⭐ {roundedVoteAverage}
              {year && <> ● {year}</>}
              {genreNames && <> ● {genreNames}</>}
              {runtime !== undefined && <> ● {runtime} min</>}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
