import SearchBar from "../searchBar/SearchBar"
import GenreBar from "../genreBar/GenreBar"
import { Link } from "react-router"

type HeaderProps = {
  hideControls?: boolean
}

export default function Header({ hideControls }: HeaderProps) {
  return (
    <>
      <header>
        <section className="p-4" id="start">
          <Link to="/">
            <img src="../../../public/img/logo_mov.svg" alt=".mov Logo" className="w-12 m-auto" />
          </Link>
        </section>
        {/* SearchBar und GenreBar werden nur angezeigt wenn erlaubt */}
        {!hideControls && <SearchBar />}
        {!hideControls && <GenreBar />}
      </header>
    </>
  )
}
