import { Link } from "react-router"
import useMovies from "../../functions/Functions"
import MovieCard from "../../components/movieCard/MovieCard"

export default function FavoritePage() {
  const { favorites } = useMovies()

  return (
    <div className="h-screen p-6">
      <div className="mb-4">
        <Link to={`/`} className=" py-1 flex items-center gap-2 !no-underline">
          <img src="/img/icon_arrow.svg" alt="Icon Arrow" className="w-5" />{" "}
          <p className="text-green size-2 text-[1.1rem] hover:text-lightgreen ">Back</p>
        </Link>
      </div>
      <h1>My Favorites </h1>
      {favorites.length === 0 ? (
        <p>No favorites listed.</p>
      ) : (
        <div>
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}
