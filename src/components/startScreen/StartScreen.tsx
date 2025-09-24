import MovieButton from "../movieButton/MovieButton"

export default function StartScreen({ onClick }: any) {
  return (
    <>
      <div className="bg-red-400 flex justify-center items-center h-screen">
        <h2>Start Screen</h2>
        <MovieButton onClick={onClick} text="Register Now" />
      </div>
    </>
  )
}
