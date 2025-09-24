import SearchBar from "../../components/searchBar/SearchBar"
import React, { useEffect } from "react"
import useMovies from "../../functions/Functions"
import MovieSlider from "../../components/movieSlider/MovieSlider"

export default function HomePage() {
  const { fetchTrendingMovies, trending } = useMovies()

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <MovieSlider movies={trending} />
      </div>
    </>
  )
}
