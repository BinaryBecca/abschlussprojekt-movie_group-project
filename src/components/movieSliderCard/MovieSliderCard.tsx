import React, { useEffect } from "react"
import useMovies from "../../functions/Functions"
import type { Result } from "../../interfaces/ITrendingMovies"

interface MovieSliderCardProps {
  movie: Result
}

export default function MovieSliderCard({ movie }: MovieSliderCardProps) {
  return (
    <div>
      <h4>{movie.title}</h4>
    </div>
  )
}
