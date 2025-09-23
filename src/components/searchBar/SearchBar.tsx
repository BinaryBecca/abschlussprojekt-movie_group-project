import useMovies from "../../functions/Functions"

export default function SearchBar() {
  const { searchMovieByName, query, setQuery } = useMovies()

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search Movie…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button></button>
      </div>
    </>
  )
}
