import { useLocation } from "react-router"
import NavButton from "../navButton/NavButton"
import useMovies from "../../functions/Functions"

export default function Footer() {
  const location = useLocation()
  const { setClickedOnSearchButton } = useMovies()

  const handleHomeClick = () => {
    setClickedOnSearchButton(false)
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-column">
      <div className="w-10 mb-4 mr-4 ml-auto">
        {location.pathname !== "/" && location.pathname !== "/account" && (
          <a
            href="#start"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>
            <img src="/img/icon_arrow_circle.svg" alt="Icon Arrow Circle" />
          </a>
        )}
        {/* <a href="#start">
          <img src="/public/img/icon_arrow_circle.svg" alt="Icon Arrow Circle" />
        </a> */}
      </div>
      <nav className="flex justify-between items-center px-7 py-3 bg-[#0e0a25] ">
        <NavButton
          link="/"
          img="/img/icon_home.svg"
          text="Home"
          classNameImg="h-6"
          className="flex items-center justify-center gap-2 no-underline"
          onClick={handleHomeClick}
        />
        <NavButton link="favorite" img="/img/icon_favorites.svg" className="" classNameImg="h-6" />
        <NavButton link="download" img="/img/icon_download.svg" className="" classNameImg="h-6" />
        <NavButton link="account" img="/img/icon_profile.svg" className="" classNameImg="h-6" />
      </nav>
    </footer>
  )
}
