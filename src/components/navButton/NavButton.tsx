import { NavLink } from "react-router"

interface NavButtonProps {
  link: string
  img: string
  className: string
  classNameImg: string
  text?: string
  altText?: string
}

export default function NavButton(props: NavButtonProps) {
  // const location = useLocation()
  // const isActive = location.pathname === props.link
  // `px-4 py-2 rounded bg-green hover:bg-lightgreen hover:text-darkblue ${isActive ? "bg-lightgreen text-darkblue" : "bg-green text-lightgrey"}`

  return (
    <>
      <NavLink to={props.link} className={`text-decoration-none ${props.className}`}>
        {props.img ? <img src={props.img} alt={props.altText} className={props.classNameImg} /> : null}
        <p className="m-0 text-green font-button font-bold uppercase">{props.text}</p>
      </NavLink>
    </>
  )
}
