import NavButton from "../navButton/NavButton"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#39395A] ">
      <nav className="flex justify-between items-center px-7 py-3">
        <NavButton
          link="/"
          img="/img/icon_home.svg"
          text="Home"
          classNameImg="h-6"
          className="flex items-center justify-center gap-2 no-underline"
        />
        <NavButton link="favorite" img="/img/icon_favorites.svg" className="" classNameImg="h-6" />
        <NavButton link="download" img="/img/icon_download.svg" className="" classNameImg="h-6" />
        <NavButton link="account" img="/img/icon_profile.svg" className="" classNameImg="h-6" />
      </nav>
    </footer>
  )
}
