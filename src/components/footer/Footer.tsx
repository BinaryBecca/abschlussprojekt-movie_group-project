import NavButton from "../navButton/NavButton"

export default function Footer() {
  return (
    <footer className="mt-auto">
      <nav className="flex justify-between items-center p-10">
        <NavButton
          link="/"
          img="../../../public/img/icon_home.svg"
          text="Home"
          classNameImg="h-8"
          className="flex items-center justify-center gap-2"
        />
        <NavButton link="/favorites" img="/icon_download.svg" className="" classNameImg="h-8" />
        <NavButton link="/download" img="../../../public/img/icon_download.svg" className="" classNameImg="h-8" />
        <NavButton link="/profile" img="../../../public/img/icon_profile.svg" className="" classNameImg="h-8" />
      </nav>
    </footer>
  )
}
