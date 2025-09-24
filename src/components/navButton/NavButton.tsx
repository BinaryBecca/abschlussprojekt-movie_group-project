import { Link, NavLink } from "react-router"

interface NavButtonProps {
  link: string
  img: string
  className: string
  text?: string
  altText?: string
}

export default function NavButton(props: NavButtonProps) {
  return (
    <>
      <NavLink to={props.link} className={props.className}>
        {props.img ? <img src={props.img} alt={props.altText} /> : null}
        <p>{props.text}</p>
      </NavLink>
    </>
  )
}
