import SearchBar from "../searchBar/SearchBar"

export default function Header() {
  return (
    <>
      <header>
        <section className="p-4">
          <img src="../../../public/img/logo_mov.svg" alt=".mov Logo" className="w-12 m-auto" />
        </section>
        <SearchBar />
      </header>
    </>
  )
}
