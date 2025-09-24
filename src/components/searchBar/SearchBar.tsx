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
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search Movie…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="bg-[#E7EFED] rounded-2xl p-3 w-full"
        />
        <button type="button" onClick={handleSearch}>
          <img src="../../../public/img/icon_search.png" alt="" className="w-8" />
        </button>
      </div>
    </>
  )
}
