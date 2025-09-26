import { Link } from 'react-router'
import type { IMovieDetails } from '../../interfaces/IMovieDetails'
import PosterImage from '../posterImage/PosterImage'
import useMovies from '../../functions/Functions'

interface MovieCardProps {
  movie: IMovieDetails
}

export default function MovieCard({ movie }: MovieCardProps) {
  const roundedVoteAverage = Number(movie.vote_average).toFixed(1)

  const { favorites, setFavorites, downloads, setDownloads } = useMovies()

  // prüfen, ob Film schon in FavoritePage
  // console.log("favorites", favorites)
  const isFavoriteClicked = favorites.find(
    (favorite) => movie.id === favorite.id
  )
  const isDownloadClicked = downloads.find(
    (download) => movie.id === download.id
  )

  return (
    <section className="mb-4">
      <div className="flex items-start gap-4 w-full">
        <Link to={`/details/${movie.id}`}>
          <PosterImage
            posterPath={movie.poster_path}
            title={movie.title}
            className="rounded-[0.6rem] h-auto max-h-[10rem] max-w-[4.8rem]"
          />
        </Link>

        <div className="flex flex-col items-stretch justify-between gap-2 w-full">
          <div className="flex flex-row justify-between items-baseline">
            <h3 className="!text-[1.2rem] font-bold ">{movie.title}</h3>
          </div>

          <div className="flex flex-row justify-start  items-center gap-2 font-light text-[0.8rem]">
            <p className="tracking-wide">
              ⭐ {roundedVoteAverage} ● {movie.release_date.slice(0, 4)} ●{'  '}
              {movie.genres?.map((genre) => genre.name).join(' | ')} {'  '}●{' '}
              {movie.runtime}
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setFavorites(movie)}>
              {isFavoriteClicked ? (
                <img
                  src="/img/icon_favorites_active.svg"
                  alt="icon_favorites_active"
                  className="h-8"
                />
              ) : (
                <img
                  src="/img/icon_favorites.svg"
                  alt="icon_favorites"
                  className="h-6"
                />
              )}
            </button>
            <button onClick={() => setDownloads(movie)}>
              {isDownloadClicked ? (
                <img
                  src="/img/icon_download_active.svg"
                  alt="icon_favorites_active"
                  className="h-8"
                />
              ) : (
                <img
                  src="/img/icon_download.svg"
                  alt="icon_favorites"
                  className="h-6"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
