import useMovies from "../../functions/Functions"

export default function SearchBar() {
  const { searchMovieByName, query, setQuery } = useMovies()

  const handleSearch = () => {
    const q = query.trim()
    if (q.length === 0) {
      return (
        <div>
          <p>Sorry, no matching movie found.</p>
        </div>
      )
    }
    searchMovieByName(q)
    console.log(q)
  }

  return (
    <>
      {/* <div>
        <input
          type="text"
          placeholder="Search Movie…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearch}></button>
      </div> */}
      <div>
        <input type="text" placeholder="test" />
        <button>Hallo</button>
      </div>
    </>
  )
}
