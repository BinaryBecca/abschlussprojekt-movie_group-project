import { useEffect } from 'react'
import useMovies from '../../functions/Functions'
import MovieCarousel from '../../components/movieCarousel/MovieCarousel'
import SearchResults from '../../components/searchResults/SearchResults'
import { useLocation, useNavigate } from 'react-router'

export default function HomePage() {
  const {
    fetchTrendingMovies,
    trending,
    searchResults,
    clickedOnSearchButton,
    setClickedOnSearchButton,
  } = useMovies()
  // console.log("rendering", { trending, query, searchResults })
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    fetchTrendingMovies()
  }, [setClickedOnSearchButton])

  useEffect(() => {
    if ((location.state as any)?.resetSearch) {
      setClickedOnSearchButton(false)
      navigate('.', { replace: true, state: {} })
    }
  }, [location.state, navigate, setClickedOnSearchButton])

  return (
    <>
      <div className="h-full">
        {clickedOnSearchButton ? (
          <SearchResults results={searchResults} />
        ) : (
          <MovieCarousel movies={trending} />
        )}
      </div>
    </>
  )
}
