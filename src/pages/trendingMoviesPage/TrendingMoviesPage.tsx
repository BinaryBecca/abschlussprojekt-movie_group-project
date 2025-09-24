import MovieList from "../../components/movieList/MovieList"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"

interface TrendingMoviesPageProps {
  movies: IMovieDetails[]
}

export default function TrendingMoviesPage({ movies }: TrendingMoviesPageProps) {
  return <>{/* <MovieList movies={movies} /> */}</>
}
