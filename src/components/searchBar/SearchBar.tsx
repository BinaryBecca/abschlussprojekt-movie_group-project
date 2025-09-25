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
      <div className="flex gap-4 px-6 relative">
        <input
          type="text"
          placeholder="Search Movie…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="bg-lightgrey text-darkblue rounded-xl p-3 w-full z-5"
        />
        <button
          type="button"
          onClick={handleSearch}
          className=" hover:text-darkblue absolute right-10 top-0 bottom-8 inset-y-1/2 translate-y-1/2 z-10">
          <img src="/img/icon_search.svg" alt="" className="w-8 m-auto" />
        </button>
      </div>
    </>
  )
}
