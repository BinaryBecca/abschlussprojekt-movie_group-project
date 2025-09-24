import React from "react"
import { Link } from "react-router"
import NavButton from "../navButton/NavButton"

export default function Footer() {
  return (
    <footer className=" p-4 mt-auto">
      <nav className="flex justify-center gap-2">
        <button className="p-4 rounded bg-[#4DA895] text-white">Lorem</button>
        <button className="p-4 rounded bg-[#4DA895] text-white">Lorem</button>
        <button className="p-4 rounded bg-[#4DA895] text-white">Lorem</button>
        <button className="p-4 rounded bg-[#4DA895] text-white">Lorem</button>
        <button className="p-4 rounded bg-[#4DA895] text-white">Lorem</button>
      </nav>

      <nav>
        <NavButton link="/" img="/" text="Home" className="" />
        <NavButton link="/favorites" img="" className="" />
        <NavButton link="/download" img="" className="" />
        <NavButton link="/favorites" img="" className="" />
        <NavButton link="/profile" img="" className="" />
      </nav>
    </footer>
  )
}
