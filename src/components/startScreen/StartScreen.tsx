import MovieButton from "../movieButton/MovieButton"

export default function StartScreen({ onClick }: any) {
  return (
    <>
      <div className="bg-darkblue flex justify-center items-center flex-column gap-2 h-screen">
        <h2>Start Screen</h2>
        <MovieButton onClick={onClick} text="Register Now" />
      </div>
    </>
  )
}
