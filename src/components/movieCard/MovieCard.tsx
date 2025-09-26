import { Link } from 'react-router'
import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import NavButton from '../navButton/NavButton'
import PosterImage from '../posterImage/PosterImage'

interface MovieCarouselCardProps {
  movie: IMovieDetails
}

export default function MovieCard({ movie }: MovieCarouselCardProps) {
  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  return (
    <section className="mb-4">
      <div className="flex items-start gap-4 w-full">
        <Link to={`/details/${movie.id}`}>
          <PosterImage
            posterPath={movie.poster_path}
            title={movie.title}
            className="rounded-[0.6rem] h-auto max-h-[10rem]"
          />
        </Link>

        <div className="flex flex-col items-stretch justify-between gap-2 w-full">
          <div className="flex flex-row justify-between items-baseline">
            <h3 className="!text-[1.2rem] font-bold ">{movie.title}</h3>
            <NavButton
              link="/favorite"
              img="/img/icon_favorites.svg"
              className=""
              classNameImg="h-6"
            />
          </div>

          <div className="flex flex-row justify-start  items-center gap-2 font-light text-[0.8rem]">
            <p className="tracking-wide">
              ⭐ {roundedVoteAverage} ● {movie.release_date.slice(0, 4)} ●{'  '}
              {movie.genres?.map((genre) => genre.name).join(' | ')} {'  '}●{' '}
              {movie.runtime}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
