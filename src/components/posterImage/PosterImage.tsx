type PosterImageProps = {
  posterPath?: string | null
  title: string
  className?: string
}

export default function PosterImage({
  posterPath,
  title,
  className = '',
}: PosterImageProps) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const fallback = '/img/placeholder.svg.png'

  const src = posterPath ? `${IMG_URL}${posterPath}` : fallback

  return (
    <img
      src={src}
      alt={title}
      className={className}
      onError={(e) => {
        // falls Poster kaputt Fallback erzwingen
        ;(e.currentTarget as HTMLImageElement).src = fallback
      }}
    />
  )
}
