import { useLocation } from "react-router"
import NavButton from "../navButton/NavButton"

export default function Footer() {
  // const location = useLocation()
  // const isActive = location.pathname === props.link

  // `px-4 py-2 rounded bg-green hover:bg-lightgreen hover:text-darkblue ${isActive ? "bg-lightgreen text-darkblue" : "bg-green text-lightgrey"}`

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-darkblue ">
      <nav className="flex justify-between items-center px-10 py-4">
        <NavButton
          link="/"
          img="/img/icon_home.svg"
          text="Home"
          classNameImg="h-8"
          className="flex items-center justify-center gap-2 no-underline"
        />
        <NavButton link="/favorites" img="/img/icon_download.svg" className="" classNameImg="h-8" />
        <NavButton link="/download" img="/img/icon_favorites.svg" className="" classNameImg="h-8" />
        <NavButton link="/profile" img="/img/icon_profile.svg" className="" classNameImg="h-8" />
      </nav>
    </footer>
  )
}
