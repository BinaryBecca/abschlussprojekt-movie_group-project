import React, { useEffect } from "react"
import useMovies from "../../functions/Functions"
import Header from "../../components/header/Header"
import MovieCarousel from "../../components/movieCarousel/MovieCarousel"

export default function HomePage() {
  const { fetchTrendingMovies, trending } = useMovies()

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  return (
    <>
      <Header />
      <div>
        <MovieCarousel movies={trending} />
      </div>
    </>
  )
}
