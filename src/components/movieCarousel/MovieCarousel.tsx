import { useState } from "react"
import type { Result } from "../../interfaces/ITrendingMovies"
import MovieCarouselCard from "../movieCarouselCard/MovieCarouselCard"
import Carousel from "react-bootstrap/Carousel"
import MovieButton from "../movieButton/MovieButton"
import type { IMovieDetails } from "../../interfaces/IMovieDetails"

interface MovieCarouselProps {
  movies: IMovieDetails[]
}

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  // ControlledCarousel
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div className="flex flex-row justify-between px-6 items-baseline mb-3 ">
        <h1>Trending Movies</h1>
        <MovieButton
          link="/trending"
          text="See all"
          linkClassName="!text-green font-bold !no-underline !hover:text-lightgreen"
        />
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className="px-10 pb-15 ">
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
