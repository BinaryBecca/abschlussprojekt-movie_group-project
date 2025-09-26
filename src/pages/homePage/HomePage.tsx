import { useEffect } from "react"
import useMovies from "../../functions/Functions"
import MovieCarousel from "../../components/movieCarousel/MovieCarousel"
import SearchResults from "../../components/searchResults/SearchResults"

export default function HomePage() {
  const { fetchTrendingMovies, trending, searchResults, clickedOnSearchButton, setClickedOnSearchButton } = useMovies()
  // console.log("rendering", { trending, query, searchResults })

  useEffect(() => {
    setClickedOnSearchButton(false)
    fetchTrendingMovies()
  }, [setClickedOnSearchButton])

  return (
    <>
      <div className="h-full">
        {clickedOnSearchButton ? <SearchResults results={searchResults} /> : <MovieCarousel movies={trending} />}
      </div>
    </>
  )
}
