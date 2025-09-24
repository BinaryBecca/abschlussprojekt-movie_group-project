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
    <>
      <div>
        <h5>Trending Movies</h5>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className="px-10 py-5">
        {movies.map((movie) => {
          return (
            <Carousel.Item key={movie.id}>
              <MovieCarouselCard movie={movie} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}
