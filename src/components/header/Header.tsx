import SearchBar from '../searchBar/SearchBar'
import GenreBar from '../genreBar/GenreBar'

type HeaderProps = {
  hideControls?: boolean
}

export default function Header({ hideControls }: HeaderProps) {
  return (
    <>
      <header>
        <section className="p-4">
          <img
            src="../../../public/img/logo_mov.svg"
            alt=".mov Logo"
            className="w-10 m-auto"
          />
        </section>
        {/* SearchBar und GenreBar werden nur angezeigt wenn erlaubt */}
        {!hideControls && <SearchBar />}
        {!hideControls && <GenreBar />}
      </header>
    </>
  )
}
