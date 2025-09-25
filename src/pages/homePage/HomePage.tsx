import React, { useEffect } from "react"
import useMovies from "../../functions/Functions"
import MovieCarousel from "../../components/movieCarousel/MovieCarousel"
import SearchResults from "../../components/searchResults/SearchResults"

export default function HomePage() {
  const { fetchTrendingMovies, trending, query, searchResults } = useMovies()
  // console.log("rendering", { trending, query, searchResults })

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  const searchInput = query.trim().length > 0

  return (
    <>
      <div>{searchInput ? <SearchResults results={searchResults} /> : <MovieCarousel movies={trending} />}</div>
    </>
  )
}
