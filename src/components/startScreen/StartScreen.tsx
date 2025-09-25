import MovieButton from "../movieButton/MovieButton"

interface StartScreenProps {
  onClick: () => void
}

export default function StartScreen({ onClick }: StartScreenProps) {
  return (
    <>
      <div className="bg-red-400 flex justify-center items-center h-screen">
        <h2>Start Screen</h2>
        <MovieButton onClick={onClick} text="Register Now" />
      </div>
    </>
  )
}
