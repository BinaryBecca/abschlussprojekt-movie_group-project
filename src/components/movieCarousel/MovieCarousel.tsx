import { useState } from "react"
import type { Result } from "../../interfaces/ITrendingMovies"
import MovieCarouselCard from "../movieCarouselCard/MovieCarouselCard"
import Carousel from "react-bootstrap/Carousel"

interface MovieCarouselProps {
  movies: Result[]
}

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  // ControlledCarousel
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {movies.map((movie) => {
        return (
          <Carousel.Item key={movie.id}>
            <MovieCarouselCard movie={movie} />
          </Carousel.Item>
        )
      })}
    </Carousel>
    // <div className="flex flex-row gap-5 p-5"></div>
  )
}
