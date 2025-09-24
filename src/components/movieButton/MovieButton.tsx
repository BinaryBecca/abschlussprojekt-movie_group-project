import { Link } from 'react-router'

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
    <button className={props.className} onClick={props.onClick}>
      {label}
    </button>
  )
}
