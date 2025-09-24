import React, { useEffect } from 'react'
import useMovies from '../../functions/Functions'
import MovieCarousel from '../../components/movieCarousel/MovieCarousel'

export default function HomePage() {
  const { fetchTrendingMovies, trending } = useMovies()

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  return (
    <>
      <div>
        <MovieCarousel movies={trending} />
      </div>
    </>
  )
}
