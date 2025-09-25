import { useEffect, useState } from "react"
import useMovies from "../../functions/Functions"
import MovieButton from "../movieButton/MovieButton"
import { Carousel } from "react-bootstrap"
import type { Genre } from "../../interfaces/IGenres"

export default function GenreBar() {
  const { genres, fetchGenreNavBar, fetchGenreByTrend, loading } = useMovies()
  const [index, setIndex] = useState(0)

  // ! Genres laden nur einmal (wenn noch keine da sind)
  useEffect(() => {
    if (genres.length === 0) void fetchGenreNavBar()
  }, [genres.length, fetchGenreNavBar])

  if (loading && genres.length === 0) return <div>Lade Genres...</div>

  // Hilfsfunktion: Genres in 3 Buttons pro Slide aufteilen
  const splittedGenres: Genre[][] = []
  for (let i = 0; i < genres.length; i += 3) {
    splittedGenres.push(genres.slice(i, i + 3))
  }

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={(i) => setIndex(i)}
        interval={null} // kein Auto-Slide
        indicators={false} // optional
        prevIcon={
          <span
            className="inline-block text-2xl text-red-400 font-bold" // Custom styling des Slider Icons
          >
            ‹
          </span>
        }
        nextIcon={
          <span
            className="inline-block text-2xl text-red-400 font-bold" // Custom styling des Slider Icons
          >
            ›
          </span>
        }>
        {splittedGenres.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center gap-2 py-2">
              {group.map((g) => (
                <MovieButton
                  key={g.id}
                  genre={g.name}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={() => fetchGenreByTrend(g.id)}
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
