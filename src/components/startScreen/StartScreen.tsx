import MovieButton from "../movieButton/MovieButton"

interface StartScreenProps {
  onClick: () => void
}

export default function StartScreen({ onClick }: StartScreenProps) {
  return (
    <>
      <div className="bg-darkblue flex flex-column  gap-4 justify-items-start items-center h-screen">
        <div className="w-full h-[65vh] relative mb-5">
          <img
            src="/public/img/startscreen_illu_02.jpg"
            alt="Movie Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h2 className="uppercase">Welcome to mov.</h2>
        <MovieButton onClick={onClick} text="Watch now" />
      </div>
    </>
  )
}
