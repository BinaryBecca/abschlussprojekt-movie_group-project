import SearchBar from "../../components/searchBar/SearchBar"
import React, { useEffect } from "react"
import useMovies from "../../functions/Functions"
import MovieSlider from "../../components/movieSlider/MovieSlider"
import Header from "../../components/header/Header"

export default function HomePage() {
  const { fetchTrendingMovies, trending } = useMovies()

  useEffect(() => {
    fetchTrendingMovies()
  })

  return (
    <>
      <Header />
      <div>
        <MovieSlider movies={trending} />
      </div>
    </>
  )
}
