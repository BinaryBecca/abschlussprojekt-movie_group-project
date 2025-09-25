import { useState } from "react"
import type { Result } from "../../interfaces/ITrendingMovies"
import MovieCarouselCard from "../movieCarouselCard/MovieCarouselCard"
import Carousel from "react-bootstrap/Carousel"
import MovieButton from "../movieButton/MovieButton"

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
      <div className="flex flex-row justify-between px-18">
        <h5>Trending Movies</h5>
        <MovieButton
          link="/trending"
          text="See all"
          linkClassName="!text-red-500 font-bold !no-underline hover:text-xl"
        />
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className="px-10 pb-5">
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
