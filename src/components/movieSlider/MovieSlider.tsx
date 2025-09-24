import React from "react"
import type { Result } from "../../interfaces/ITrendingMovies"
import MovieSliderCard from "../movieSliderCard/MovieSliderCard"

interface MovieSliderProps {
  movies: Result[]
}

export default function MovieSlider({ movies }: MovieSliderProps) {
  return (
    <div>
      {movies.map((movie) => {
        return <MovieSliderCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}
