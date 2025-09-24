import { Link } from "react-router"

interface MovieButtonProps {
  link: string
  img?: string
  className?: string
  linkClassName?: string
  textClassName?: string
  genre?: string
  key?: number
  text?: string
  onClick: () => Promise<void>
}

export default function MovieButton(props: MovieButtonProps) {
  return (
    <>
      <Link to={props.link} className={props.linkClassName}>
        {props.genre ? props.genre : props.text}
      </Link>
    </>
  )
}
