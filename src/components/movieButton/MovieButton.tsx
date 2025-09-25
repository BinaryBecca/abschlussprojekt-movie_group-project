import { Link, useLocation } from 'react-router'

interface MovieButtonProps {
  link?: string
  className?: string
  linkClassName?: string
  genre?: string
  key?: number
  text?: string
  onClick?: () => void | Promise<void>
}

export default function MovieButton(props: MovieButtonProps) {
  const label = props.genre ? props.genre : props.text
  // const location = useLocation()
  // const isActive = location.pathname === props.link

  if (props.link) {
    return (
      <Link
        to={props.link}
        className={props.linkClassName}
        onClick={props.onClick}
      >
        {label}
      </Link>
    )
  }

  return (
    <button
      className={`px-[1.6rem] py-[0.6rem] bg-green hover:bg-lightgreen hover:text-darkblue active:bg-lightgreen active:text-darkblue rounded ${
        props.className ?? ''
      }`}
      onClick={props.onClick}
    >
      {label}
    </button>
  )
}

// Code-Schnipsel für useLocation()
// `px-4 py-2 rounded bg-green hover:bg-lightgreen hover:text-darkblue ${isActive ? "bg-lightgreen text-darkblue" : "bg-green text-lightgrey"}`
