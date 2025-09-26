import { useLocation, useNavigate } from "react-router"
import useMovies from "../../functions/Functions"
import MovieCard from "../../components/movieCard/MovieCard"
import SearchResults from "../../components/searchResults/SearchResults"
import { useEffect } from "react"

export default function FavoritePage() {
  const { favorites, searchResults, clickedOnSearchButton, setClickedOnSearchButton } = useMovies()

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((location.state as any)?.resetSearch) {
      setClickedOnSearchButton(false)
      navigate(".", { replace: true, state: {} })
    }
  }, [location.state, navigate, setClickedOnSearchButton])

  return (
    <div className="h-screen p-6">
      {clickedOnSearchButton ? (
        <SearchResults results={searchResults} />
      ) : favorites.length === 0 ? (
        <div>
          <h1>My Favorites</h1>
          <div>No Movies listed.</div>
        </div>
      ) : (
        <div>
          <h1>My Favorites </h1>
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}
