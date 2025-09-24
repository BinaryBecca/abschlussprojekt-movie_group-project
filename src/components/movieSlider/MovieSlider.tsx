import type { Result } from "../../interfaces/ITrendingMovies"
import MovieSliderCard from "../movieSliderCard/MovieSliderCard"

interface MovieSliderProps {
  movies: Result[]
}

export default function MovieSlider({ movies }: MovieSliderProps) {
  return (
    <div className="flex flex-row gap-5 p-5">
      {movies.map((movie) => {
        return <MovieSliderCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}
